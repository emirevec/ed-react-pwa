import { type Prod } from '../../types/types'

type Data = Prod[]

interface Api {
    endpoint: string
    getAllProducts: () => Promise<Data>
}

export const ApiDataSource = (): Api => ({
    endpoint: '',
    async getAllProducts () {
        const res = await fetch(`${this.endpoint}/products`)
        const data = await res.json()
        return data
    }
})
