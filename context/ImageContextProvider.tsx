import { useInputState } from "@mantine/hooks"
import { createContext, useState, useEffect, useCallback } from "react"

const url = "https://api.unsplash.com/search/photos"

type ContextPropsType = {
    children: React.ReactNode
}

type ContextValueType = {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    images: any[]
    setImages: React.Dispatch<React.SetStateAction<any[]>>
    query: string
    setQuery: React.ChangeEventHandler<HTMLInputElement>
    fetchImagesList: () => Promise<void>
}

export const ImageContext = createContext<ContextValueType>({} as ContextValueType)

const ImageContextProvider = ({ children }: ContextPropsType) => {
    const [page, setPage] = useState<number>(1)
    const [images, setImages] = useState<any[]>([])
    const [query, setQuery] = useInputState<string>("")

    const fetchImagesList = useCallback(async () => {
        try {
            const response = await fetch(`${url}?query=${query ? query : "coffee"}&page=${page}`, {
                headers: {
                    Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
                }
            })
            const { results } = await response.json()
            { (page > 1) ? setImages((prev) => [...prev, ...results]) : setImages([...results]) }
            setQuery("")
        } catch (error: any) {
            console.log(error.message);
        }
    }, [page, query])

    useEffect(() => {
        fetchImagesList()
    }, [page])

    return (
        <ImageContext.Provider value={{
            page,
            setPage,
            images,
            setImages,
            query,
            setQuery,
            fetchImagesList
        }}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider