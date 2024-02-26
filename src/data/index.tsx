import { MockDataSource } from './sources'
import { type mockData } from '../types/types'

const dataSource = MockDataSource()

const productsDataSourceBuilder = (dataSource: mockData) => () => ({
    all: dataSource.getAllProducts
})

const checkoutDataSourceBuilder = (dataSource: mockData) => () => ({
    post: dataSource.postCheckout
})

const productsDataSource = productsDataSourceBuilder(dataSource)()
const checkoutDataSource = checkoutDataSourceBuilder(dataSource)()

const DataSources = {
    products: productsDataSource,
    checkout: checkoutDataSource
}

export default DataSources
