import { Box, Title } from "@mantine/core"
import { Image } from "@mantine/core"
import { useEffect, useRef } from "react"

type ImagePropsType = {
    imgSrc: string
    user: string
    alt_desc: string
    isLast: boolean
    nextPage: () => void
}

const Card = ({
    imgSrc,
    user,
    alt_desc,
    isLast,
    nextPage
}: ImagePropsType) => {

    const cardRef = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        if (!cardRef?.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (isLast && entry.isIntersecting) {
                console.log("The End");
                nextPage()
                observer.unobserve(entry.target)
            }
        })

        observer.observe(cardRef.current)
    }, [isLast])

    return (
        <Box ref={cardRef} sx={{
            backgroundColor: "#25262B",
            padding: 8,
            borderRadius: 8,
        }}>
            <Image src={imgSrc} alt={alt_desc ? alt_desc : "Image"} />
            <Title my={4} order={5}>{user}</Title>
        </Box>
    )
}

export default Card