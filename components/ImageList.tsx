import axios from "axios"
import { useEffect, useState } from "react"
import Masonry from "react-responsive-masonry"
import Card from "./Card"

const url = "https://api.unsplash.com/search/photos"

const ImageList = () => {
    const [page, setPage] = useState<number>(1)
    const [images, setImages] = useState<any[]>([])

    const fetchImagesList = async () => {
        const response = await fetch(`${url}?query=tea&page=${page}`, {
            headers: {
                Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
            }
        })
        const { results } = await response.json()
        setImages((prev) => [...prev, ...results])
        console.log(results);
    }

    useEffect(() => {
        fetchImagesList()
    }, [page])

    return (
        <Masonry columnsCount={3} gutter="12px">
            {images.map((image, index) => (
                <Card
                    key={image.id}
                    imgSrc={image.urls.regular}
                    alt_desc={image.alt_description}
                    like={image.likes}
                    isLast={index === images.length - 1}
                    nextPage={() => setPage(page + 1)}
                    user={image.user.first_name}
                />
            ))}
        </Masonry>
    )
}

export default ImageList