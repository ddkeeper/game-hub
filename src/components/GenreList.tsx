import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
    const { data } = useGenres();

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
