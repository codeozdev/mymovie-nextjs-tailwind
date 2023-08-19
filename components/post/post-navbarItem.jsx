'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const PostNavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams()

    const genre = searchParams.get('genre')

    return (
        <div>
            <Link
                href={`/?genre=${param}`}
                className={`hover:text-red-500 font-semibold p-2 
            ${
                genre &&
                genre === param &&
                'underline underline-offset-8  decoration-2 decoration-red-500 rounded-lg'
            }`}>
                {title}
            </Link>
        </div>
    )
}
export default PostNavbarItem

//underline: alt cizgi
//underline-offset-8: alt cizgiyi 8px asagiya kaydir
//decoration-2: alt cizgiyi 2px kalinlastir
