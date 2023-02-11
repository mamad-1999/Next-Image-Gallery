import { Badge } from '@mantine/core';

type TagProps = {
    content: string
}

const Tag = ({ content }: TagProps) => {
    return (
        <Badge color="cyan">{content}</Badge>
    );
}

export default Tag