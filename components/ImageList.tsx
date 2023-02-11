import { useEffect, useState } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
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
        if (response.ok) {
            const { results } = await response.json()
            { (page > 1) ? setImages((prev) => [...prev, ...results]) : setImages([...results]) }
            console.log(results);
            return
        }
        console.log("Request Failed!");
    }

    useEffect(() => {
        fetchImagesList()
    }, [page])

    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 650: 2, 900: 3, 1200: 4 }}>
            <Masonry columnsCount={3} gutter="12px">
                {images.map((image, index) => (
                    <Card
                        key={image.id}
                        imgSrc={image.urls.regular}
                        alt_desc={image.alt_description}
                        like={image.likes}
                        tags={image.tags}
                        isLast={index === images.length - 1}
                        nextPage={() => setPage(page + 1)}
                        user={image.user.first_name}
                        avatar={image.user.profile_image.small}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default ImageList