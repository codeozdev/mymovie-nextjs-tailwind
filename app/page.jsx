import PostNavbar from '@/components/post/post-navbar'
import PostResult from '@/components/post/post-result'
import PostSearch from '@/components/post/post-search'

const API_KEY = process.env.API_KEY
const baseAPI = 'https://api.themoviedb.org/3/'

export default async function Home({ searchParams }) {
    const genre = searchParams.genre || 'fetchPopular'

    let apiUrl

    if (genre === 'fetchPopular') {
        apiUrl = `${baseAPI}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    } else if (genre === 'fetchTopRated') {
        apiUrl = `${baseAPI}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    } else if (genre === 'fetchUpComing') {
        apiUrl = `${baseAPI}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    } else if (genre === 'fetchTV') {
        apiUrl = `${baseAPI}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    } else {
        apiUrl = ''
    }

    const res = await fetch(apiUrl) //get request
    const data = await res.json()
    const results = data.results

    return (
        <main>
            <PostSearch />
            <PostNavbar />
            <PostResult results={results} />
        </main>
    )
}

