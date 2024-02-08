const fs = require('fs');
const path = require('path');

// Function to generate a random price
function generateRandomPrice() {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}

// Function to create an object for each file
function createObject(filePath, id, category) {
    const fileName = path.basename(filePath);
    const title = fileName.split('-')[0].toUpperCase();
    const description = fileName.split('.')[0];
    return {
        id: id,
        title: title,
        src: filePath,
        price: generateRandomPrice(),
        description: description,
        sizes: [],
        colors: [],
        category: category
    };
}

// Function to process files in a directory
function processDirectory(directoryPath) {
    let data = [];
    let id = 1;
    fs.readdirSync(directoryPath).forEach(item => {
        const itemPath = path.join(directoryPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
            fs.readdirSync(itemPath).forEach(file => {
                if (path.extname(file) === '.webp') {
                    const filePath = path.join(itemPath, file);
                    data.push(createObject(filePath, id++, item)); // Pass category as parameter
                }
            });
        }
    });
    return data;
}

// Main function
function main() {
    const directoryPath = 'virtual/public/src/images/products'; // Replace this with the path to your directory
    const data = processDirectory(directoryPath);
    const jsonData = JSON.stringify(data, null, 4);
    fs.writeFileSync('output.json', jsonData);
}

main();

