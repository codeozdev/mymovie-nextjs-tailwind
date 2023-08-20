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
                        <p>Vote: {result.vote_average}/10</p>
                        <p>Vote Count: {result.vote_count}</p>
                    </div>
                </Link>
            </div>
        </PaddingContainer>
    )
}
export default PostResultItem

// "adult": false,
// "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
// "genre_ids": [
//     16,
//     35,
//     10751,
//     14,
//     10749
// ],
// "id": 976573,
// "original_title": "Elemental",
// "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
// "popularity": 4696.546,
// "poster_path": "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
// "release_date": "2023-06-14",
// "title": "Elemental",
// "video": false,
// "vote_average": 7.8,
// "vote_count": 1050

// const genre = searchParams.genre || 'fetchPopular'
// const linkTo = mediaType === 'tv' ? `/tv/${result.id}` : `/movie/${result.id}`;
