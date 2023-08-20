import Image from 'next/image'
import PaddingContainer from '../layout/padding-container'
import Link from 'next/link'

const PostResultItem = ({ result }) => {
    return (
        <PaddingContainer>
            <div className='bg-neutral-900 rounded-md text-xs hover:shadow-lg hover:shadow-red-600'>
                <Link href={`/movie/${result.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                        alt={result.title}
                        width={500}
                        height={300}
                        className='h-64 sm:h-52 w-full object-fill rounded-t-md'
                        placeholder='blur'
                        blurDataURL='/spinner.svg'
                    />
                    <div className='space-y-1 text-neutral-400 p-1 text-center md:text-start'>
                        <h3 className='truncate font-bold text-white mt-1'>
                            {result.original_title || result.name}
                        </h3>
                        <p>Release Date: {result.release_date}</p>
                        <p>Popularity: {result.popularity}</p>
                        <p>Vote: {result.vote_average.toFixed(1)}/10</p>
                        <p>Vote Count: {result.vote_count}</p>
                    </div>
                </Link>
            </div>
        </PaddingContainer>
    )
}
export default PostResultItem
