import PaddingContainer from '../layout/padding-container'
import PostNavbarItem from './post-navbarItem'

const PostNavbar = () => {
    return (
        <PaddingContainer>
            <div className='flex justify-center items-center text-xs gap-2 md:gap-4 md:ml-3 md:justify-start md:text-base'>
                <PostNavbarItem title='Popular' param='fetchPopular' />
                <PostNavbarItem title='Top Rated' param='fetchTopRated' />
                <PostNavbarItem title='Up Coming' param='fetchUpComing' />
                <PostNavbarItem title='Now Playing' param='fetchNowPlaying' />
            </div>
        </PaddingContainer>
    )
}
export default PostNavbar
