import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'

const API_KEY = process.env.API_KEY
const baseUrl = 'https://api.themoviedb.org/3/'

async function getMovie(movieId) {
    const res = await fetch(`${baseUrl}/movie/${movieId}?api_key=${API_KEY}`)
    return await res.json()
}

async function getMovieCredits(movieId) {
    const res = await fetch(
        `${baseUrl}/movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    const data = await res.json()
    const results = data.cast
    return results
}

const MoviePage = async ({ params }) => {
    const movieId = params.id
    const movie = await getMovie(movieId)
    const credits = await getMovieCredits(movieId)

    return (
        <PaddingContainer>
            <div className='flex flex-col md:flex-row  gap-4 '>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    width={500}
                    height={300}
                    alt='img'
                    className='md:h-full md:pt-6'
                />
                <div className='space-y-1 text-neutral-400 text-sm md:block md:w-full'>
                    <h3 className='font-semibold text-white my-4 text-4xl text-start'>
                        {movie.original_title || movie.name}
                    </h3>
                    <div className='flex justify-between pb-5'>
                        <p className='text-neutral-400 text-sm underline'>
                            {movie.release_date}
                        </p>
                        <p className='flex items-center gap-2'>
                            <FiThumbsUp className='hover:text-red-500 cursor-pointer' />
                            {movie.vote_count}
                        </p>
                    </div>
                    <p className='text-neutral-400 text-sm'>{movie.overview}</p>

                    <div className='flex flex-col gap-4'>
                        <h3 className='font-semibold text-white text-xl text-start mt-2'>
                            Cast
                        </h3>
                        {credits.slice(0, 5).map((credit) => (
                            <div
                                key={credit.id}
                                className='flex items-center border rounded-lg space-x-2 p-2'>
                                <Image
                                    src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                                    width={500}
                                    height={300}
                                    alt='img'
                                    className='w-12 rounded-md'
                                />

                                <div className='space-y-3 truncate'>
                                    <h3 className='text-[#f88684] font-semibold text-sm'>
                                        {credit.name}
                                    </h3>
                                    <h3 className='font-semibold text-xs'>
                                        {credit.character}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PaddingContainer>
    )
}
export default MoviePage
