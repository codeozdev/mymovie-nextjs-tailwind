'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { AiOutlineSearch } from 'react-icons/ai'
import PaddingContainer from '../layout/padding-container'

const PostSearch = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    function handleSubmit(e) {
        e.preventDefault()
        if (!search) return //eger search bos ise hicbir sey yapma
        router.push(`/search/${search}`) //ama data varsa search sayfasina gidiyoruz
        setSearch('')
    }

    return (
        <PaddingContainer>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center max-w-[600px]'>
                    <h1 className=''>Search Movie or TV Shows</h1>
                    <p className='text-sm md:text-base text-neutral-600 my-4 px-12 md:px-10 md:my-6 md:max-w-md'>
                        This site will give you all the information about the
                        movie or TV series you are looking for.
                    </p>
                </div>
                <form
                    className='relative flex items-center p-2 bg-neutral-900 rounded-lg max-w-[350px]  md:max-w-[600px]  py-3'
                    onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='bg-transparent outline-none placeholder:text-neutral-600 w-screen'
                        placeholder='Search Movie or TV-Show'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <AiOutlineSearch
                        className='absolute right-2 text-neutral-600'
                        size={20}
                    />
                </form>
            </div>
        </PaddingContainer>
    )
}
export default PostSearch
