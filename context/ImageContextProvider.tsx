import { createContext, useState, useEffect } from "react"

const url = "https://api.unsplash.com/search/photos"

type ContextPropsType = {
    children: React.ReactNode
}

type ContextValueType = {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    images: any[]
    setImages: React.Dispatch<React.SetStateAction<any[]>>
}

export const ImageContext = createContext<ContextValueType>({} as ContextValueType)

const ImageContextProvider = ({ children }: ContextPropsType) => {
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
        <ImageContext.Provider value={{ page, setPage, images, setImages }}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider