import { ImageContext } from "@/context/ImageContextProvider"
import { useContext } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Card from "./Card"

const ImageList = () => {
    const { page, images, setPage } = useContext(ImageContext)

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