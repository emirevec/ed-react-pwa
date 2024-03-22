import { useLocation, useSearchParams } from 'react-router-dom'

interface QueryParams {
    filter: string | null
    category: string | null
}

export function useQueryParams (): QueryParams {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const filter = searchParams.get('q')
    const category = new URLSearchParams(location.search).get('category')
    return { filter, category }
}
