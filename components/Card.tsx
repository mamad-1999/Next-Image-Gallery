import { ActionIcon, Box, Flex, Text, Title, Image, Avatar } from "@mantine/core"
import { useEffect, useRef } from "react"
import Tag from "./Tag"

type TagsListType = {
    title: string
}

type ImagePropsType = {
    imgSrc: string
    user: string
    alt_desc: string
    isLast: boolean
    like: number
    nextPage: () => void
    tags: TagsListType[]
    avatar: string
}

const Card = ({
    imgSrc,
    user,
    alt_desc,
    isLast,
    nextPage,
    like,
    tags,
    avatar
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
            <Box sx={{ overflow: "hidden", borderRadius: 8, }}>
                <Image src={imgSrc} alt={alt_desc ? alt_desc : "Image"} sx={{
                    '&:hover': {
                        opacity: "0.8",
                        scale: "1.1",
                        transition: "ease .3s all"
                    },
                }} />
            </Box>
            <Flex my={12} align="center" justify="space-between" px={8}>
                <Flex gap={8} align="center" justify="center">
                    <Avatar src={avatar} radius="xl" size="md" alt="profile" />
                    <Text fw={500}>{user}</Text>
                </Flex>
                <Flex gap={8} align="center" justify="center">
                    <Title order={6}>{like}</Title>
                    <ActionIcon size="lg" variant="default" p={4}>
                        <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="#fff">
                            <path d="M44 12c-8 0-9.91 8-12 8s-4-8-12-8c-6.63 0-12 4-12 12 0 12 20 28 24 28s24-16 24-28c0-8-5.37-12-12-12z" />
                        </svg>
                    </ActionIcon>
                </Flex>
            </Flex>
            <Flex gap={4}>
                {tags.map(tag => (
                    <Tag key={tag.title} content={tag.title} />
                ))}
            </Flex>
        </Box >
    )
}

export default Card