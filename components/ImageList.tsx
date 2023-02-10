import { Box, Grid } from '@mantine/core';
import { Image } from '@mantine/core';

const images = [
    "https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1675990978468-fae491567b75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1675847964173-ae6f3de53866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1675935123206-dacc60f43d59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1670272506253-3a185e06d102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1675972486643-18758f47bbf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
]

const ImageList = () => {
    return (
        <Grid grow>
            {
                images.map((img, index) => (
                    <Grid.Col key={index} span={4}>
                        <Box
                            sx={{
                                backgroundColor: "#eee",
                                padding: 4,
                                borderRadius: 4,
                                position: "relative"
                            }}
                        >
                            <Image src={img} alt={img} />
                        </Box>
                    </Grid.Col>
                ))
            }
        </Grid>
    )
}

export default ImageList