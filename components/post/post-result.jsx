import PaddingContainer from '../layout/padding-container'
import PostResultItem from './post-resultItem'

const PostResult = ({ results }) => {
    return (
        <PaddingContainer>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                {results.map((result) => (
                    <PostResultItem key={result.id} result={result} />
                ))}
            </div>
        </PaddingContainer>
    )
}
export default PostResult
