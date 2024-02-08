import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import Gallery from '../components/Gallery/Gallery'

const Home = (): JSX.Element => {
    const products = [
        {
            "id": 1,
            "title": "ALI",
            "src": "virtual\\public\\src\\images\\products\\glasses\\ali-pazani-GwglcplmXDs-unsplash.jpg.webp",
            "price": 318,
            "description": "ali-pazani-GwglcplmXDs-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 2,
            "title": "ANTEOJOS.JPG.WEBP",
            "src": "virtual\\public\\src\\images\\products\\glasses\\Anteojos.jpg.webp",
            "price": 331,
            "description": "Anteojos",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 3,
            "title": "APOSTOLOS",
            "src": "virtual\\public\\src\\images\\products\\glasses\\apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg.webp",
            "price": 346,
            "description": "apostolos-vamvouras-mKi4QEJXRCs-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 4,
            "title": "CHARLES",
            "src": "virtual\\public\\src\\images\\products\\glasses\\charles-deluvio-1-nx1QR5dTE-unsplash.jpg.webp",
            "price": 388,
            "description": "charles-deluvio-1-nx1QR5dTE-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 5,
            "title": "CHASE",
            "src": "virtual\\public\\src\\images\\products\\glasses\\chase-fade-WgjmiOxYKRQ-unsplash.jpg.webp",
            "price": 684,
            "description": "chase-fade-WgjmiOxYKRQ-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 6,
            "title": "ETHAN",
            "src": "virtual\\public\\src\\images\\products\\glasses\\ethan-robertson-SYx3UCHZJlo-unsplash.jpg.webp",
            "price": 388,
            "description": "ethan-robertson-SYx3UCHZJlo-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 7,
            "title": "GIORGIO",
            "src": "virtual\\public\\src\\images\\products\\glasses\\giorgio-trovato-K62u25Jk6vo-unsplash.jpg.webp",
            "price": 206,
            "description": "giorgio-trovato-K62u25Jk6vo-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 8,
            "title": "KARSTEN",
            "src": "virtual\\public\\src\\images\\products\\glasses\\karsten-winegeart-zgLydtnQmS4-unsplash.jpg.webp",
            "price": 661,
            "description": "karsten-winegeart-zgLydtnQmS4-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 9,
            "title": "NOAH",
            "src": "virtual\\public\\src\\images\\products\\glasses\\noah-black-1p3N5SHz0Hk-unsplash.jpg.webp",
            "price": 656,
            "description": "noah-black-1p3N5SHz0Hk-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 10,
            "title": "SEBASTIAN",
            "src": "virtual\\public\\src\\images\\products\\glasses\\sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
            "price": 704,
            "description": "sebastian-coman-travel-dtOTQYmTEs0-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 11,
            "title": "STEPHANIE",
            "src": "virtual\\public\\src\\images\\products\\glasses\\stephanie-hau-P4TPjOXKqY8-unsplash.jpg.webp",
            "price": 169,
            "description": "stephanie-hau-P4TPjOXKqY8-unsplash",
            "sizes": [],
            "colors": [],
            "category": "glasses"
        },
        {
            "id": 12,
            "title": "ALI",
            "src": "virtual\\public\\src\\images\\products\\jeans\\ali-pazani-Pdds9XsWyoM-unsplash.jpg.webp",
            "price": 532,
            "description": "ali-pazani-Pdds9XsWyoM-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 13,
            "title": "ALICIA",
            "src": "virtual\\public\\src\\images\\products\\jeans\\alicia-petresc-BciCcl8tjVU-unsplash.jpg.webp",
            "price": 336,
            "description": "alicia-petresc-BciCcl8tjVU-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 14,
            "title": "CHRISTOPHER",
            "src": "virtual\\public\\src\\images\\products\\jeans\\christopher-ivanov-h6jgQaBNIyA-unsplash.jpg.webp",
            "price": 837,
            "description": "christopher-ivanov-h6jgQaBNIyA-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 15,
            "title": "DAVE",
            "src": "virtual\\public\\src\\images\\products\\jeans\\dave-goudreau-UfYPR2UIOW4-unsplash.jpg.webp",
            "price": 719,
            "description": "dave-goudreau-UfYPR2UIOW4-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 16,
            "title": "JEANS.JPG.WEBP",
            "src": "virtual\\public\\src\\images\\products\\jeans\\jeans.jpg.webp",
            "price": 321,
            "description": "jeans",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 17,
            "title": "JIMMY",
            "src": "virtual\\public\\src\\images\\products\\jeans\\jimmy-jimenez-hGxReQwL5jE-unsplash.jpg.webp",
            "price": 819,
            "description": "jimmy-jimenez-hGxReQwL5jE-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 18,
            "title": "JOSE",
            "src": "virtual\\public\\src\\images\\products\\jeans\\jose-martinez-59wAqtRDSj0-unsplash.jpg.webp",
            "price": 293,
            "description": "jose-martinez-59wAqtRDSj0-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 19,
            "title": "MARLON",
            "src": "virtual\\public\\src\\images\\products\\jeans\\marlon-silva-EbyfUtxtEbc-unsplash.jpg.webp",
            "price": 546,
            "description": "marlon-silva-EbyfUtxtEbc-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 20,
            "title": "SILVIU",
            "src": "virtual\\public\\src\\images\\products\\jeans\\silviu-beniamin-tofan-spqwdZXzduU-unsplash.jpg.webp",
            "price": 178,
            "description": "silviu-beniamin-tofan-spqwdZXzduU-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 21,
            "title": "TAMARA",
            "src": "virtual\\public\\src\\images\\products\\jeans\\tamara-bellis-zDyJOj8ZXG0-unsplash.jpg.webp",
            "price": 725,
            "description": "tamara-bellis-zDyJOj8ZXG0-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 22,
            "title": "VLADIMIR",
            "src": "virtual\\public\\src\\images\\products\\jeans\\vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg.webp",
            "price": 917,
            "description": "vladimir-fedotov-MPfyh3xJ1iE-unsplash",
            "sizes": [],
            "colors": [],
            "category": "jeans"
        },
        {
            "id": 23,
            "title": "ALEXANDRA",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\alexandra-gorn-CJ6SJO_yR5w-unsplash.jpg.webp",
            "price": 242,
            "description": "alexandra-gorn-CJ6SJO_yR5w-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 24,
            "title": "ANDRES",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\andres-jasso-PqbL_mxmaUE-unsplash.jpg.webp",
            "price": 343,
            "description": "andres-jasso-PqbL_mxmaUE-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 25,
            "title": "CALZADO.JPG.WEBP",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\Calzado.jpg.webp",
            "price": 307,
            "description": "Calzado",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 26,
            "title": "CAMILA",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\camila-damasio-mWYhrOiAgmA-unsplash.jpg.webp",
            "price": 331,
            "description": "camila-damasio-mWYhrOiAgmA-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 27,
            "title": "IMANI",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\imani-bahati-LxVxPA1LOVM-unsplash.jpg.webp",
            "price": 513,
            "description": "imani-bahati-LxVxPA1LOVM-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 28,
            "title": "IRENE",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\irene-kredenets-dwKiHoqqxk8-unsplash.jpg.webp",
            "price": 414,
            "description": "irene-kredenets-dwKiHoqqxk8-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 29,
            "title": "JACLYN",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\jaclyn-moy-ugZxwLQuZec-unsplash.jpg.webp",
            "price": 956,
            "description": "jaclyn-moy-ugZxwLQuZec-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 30,
            "title": "JAKOB",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\jakob-owens-JzJSybPFb3s-unsplash.jpg.webp",
            "price": 905,
            "description": "jakob-owens-JzJSybPFb3s-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 31,
            "title": "MOHAMMAD",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\mohammad-metri-E-0ON3VGrBc-unsplash.jpg.webp",
            "price": 630,
            "description": "mohammad-metri-E-0ON3VGrBc-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 32,
            "title": "PAUL",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\paul-gaudriault-a-QH9MAAVNI-unsplash.jpg.webp",
            "price": 632,
            "description": "paul-gaudriault-a-QH9MAAVNI-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 33,
            "title": "WENGANG",
            "src": "virtual\\public\\src\\images\\products\\sneakers\\wengang-zhai-_fOL6ebfECQ-unsplash.jpg.webp",
            "price": 189,
            "description": "wengang-zhai-_fOL6ebfECQ-unsplash",
            "sizes": [],
            "colors": [],
            "category": "sneakers"
        },
        {
            "id": 34,
            "title": "AMIR",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\amir-babaei-0NK0FtJnIWE-unsplash.jpg.webp",
            "price": 843,
            "description": "amir-babaei-0NK0FtJnIWE-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 35,
            "title": "CHELSEA",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\chelsea-ferenando-r_-M00daj2Y-unsplash.jpg.webp",
            "price": 885,
            "description": "chelsea-ferenando-r_-M00daj2Y-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 36,
            "title": "CHRISTIAN",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\christian-bolt-VW5VjskNXZ8-unsplash.jpg.webp",
            "price": 438,
            "description": "christian-bolt-VW5VjskNXZ8-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 37,
            "title": "FREE",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\free-to-use-sounds-HXaCARJwKUQ-unsplash.jpg.webp",
            "price": 193,
            "description": "free-to-use-sounds-HXaCARJwKUQ-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 38,
            "title": "JASON",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\jason-yoder-CzZGxHUrOlI-unsplash.jpg.webp",
            "price": 229,
            "description": "jason-yoder-CzZGxHUrOlI-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 39,
            "title": "MARCEL",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\marcel-j-uWrCdB5sM-unsplash.jpg.webp",
            "price": 461,
            "description": "marcel-j-uWrCdB5sM-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 40,
            "title": "MARCUS",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\marcus-ganahl-EQIrev_NGH8-unsplash.jpg.webp",
            "price": 510,
            "description": "marcus-ganahl-EQIrev_NGH8-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 41,
            "title": "NANDKISHORE",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\nandkishore-sahu-6M14IWufRLw-unsplash.jpg.webp",
            "price": 568,
            "description": "nandkishore-sahu-6M14IWufRLw-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 42,
            "title": "REMERAS.JPG.WEBP",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\Remeras.jpg.webp",
            "price": 902,
            "description": "Remeras",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 43,
            "title": "SINA",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\sina-rezakhani-PMdtwPKWt5Q-unsplash.jpg.webp",
            "price": 329,
            "description": "sina-rezakhani-PMdtwPKWt5Q-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        },
        {
            "id": 44,
            "title": "TOM",
            "src": "virtual\\public\\src\\images\\products\\t-shirt\\tom-cochereau-bf_CMgK8Pj0-unsplash.jpg.webp",
            "price": 336,
            "description": "tom-cochereau-bf_CMgK8Pj0-unsplash",
            "sizes": [],
            "colors": [],
            "category": "t-shirt"
        }
    ]
    return (
        <>
        <NavBar></NavBar>
        <Gallery products={products}></Gallery>
        </>
    )
}

export default Home
