import { useState, useEffect, useCallback } from "react"
import ImageList from "@/components/ImageList"
import Header from "./Header"

const url = "https://api.unsplash.com/search/photos"

const HomeLayout = () => {
    const [page, setPage] = useState<number>(1)
    const [images, setImages] = useState<any[]>([])
    const [query, setQuery] = useState<string>("")

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <>
            <Header
                query={query}
                onSearch={handelSearch}
                onFetch={fetchImagesList} />
            <ImageList
                page={page}
                setPage={setPage}
                images={images} />
        </>
    )
}

export default HomeLayout