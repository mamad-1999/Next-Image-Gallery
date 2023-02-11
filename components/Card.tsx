import { Box, Title } from "@mantine/core"
import { Image } from "@mantine/core"

type ImagePropsType = {
    imgSrc: string
    user: string
    alt_desc: string
    isLast: boolean
    nextPage: () => void
}

const Card = (props: ImagePropsType) => {
    return (
        <Box sx={{
            backgroundColor: "#25262B",
            padding: 8,
            borderRadius: 8,
        }}>
            <Image src={props.imgSrc} alt={"props.alt_desc"} />
            <Title my={4} order={5}>jon doe</Title>
        </Box>
    )
}

export default Card