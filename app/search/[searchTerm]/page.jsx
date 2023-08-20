import PostResult from '@/components/post/post-result'

const API_KEY = process.env.API_KEY
const baseAPI = 'https://api.themoviedb.org/3/'

export default async function SearchPage({ params }) {
    const res = await fetch(
        `${baseAPI}search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US`,
    )
    const data = await res.json()
    const results = data.results

    if (!results) throw new Error('No results found')

    return (
        <div>
            {results && results.length === 0 && <h1>No results found</h1>}
            {results && <PostResult results={results} />}
        </div>
    )
}
