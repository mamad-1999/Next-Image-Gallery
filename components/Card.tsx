import { Box, Image, Title } from "@mantine/core"
import { images } from "@/data"

const Card = () => {
    return (
        <Box sx={{
            backgroundColor: "#25262B",
            padding: 8,
            borderRadius: 8,
        }}>
            <Image src={images[0]} alt={"img"} />
            <Title my={4} order={5}>jon doe</Title>
        </Box>
    )
}

export default Card