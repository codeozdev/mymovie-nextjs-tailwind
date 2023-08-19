import PaddingContainer from '../layout/padding-container'
import PostNavbarItem from './post-navbarItem'

const PostNavbar = () => {
    return (
        <PaddingContainer>
            <div className='flex justify-center items-center text-xs gap-4 md:justify-start md:text-base'>
                <PostNavbarItem title='Popular' param='fetchPopular' />
                <PostNavbarItem title='Top Rated' param='fetchTopRated' />
                <PostNavbarItem title='Up Coming' param='fetchUpComing' />
                <PostNavbarItem title='TV Show' param='fetchTV' />
            </div>
        </PaddingContainer>
    )
}
export default PostNavbar
