import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    if (isLoading) return <Spinner></Spinner>;
    if (error) return null;
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
