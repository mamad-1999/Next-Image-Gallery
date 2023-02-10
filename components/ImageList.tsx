import Masonry from "react-responsive-masonry"
import Card from "./Card"

const ImageList = () => {
    return (
        <Masonry columnsCount={3} gutter="12px">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <Card key={index} />
            ))}
        </Masonry>
    )
}

export default ImageList