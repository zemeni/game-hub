import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Spinner, Button, Text, Heading} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data: genres, isLoading, error} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner/>;
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} objectFit='cover'
                               src={getCroppedImageUrl(genre.image_background)}/>
                        <Button whiteSpace='normal' textAlign='left'
                                color={genre.id === selectedGenre?.id ? 'yellow' : ''}
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    );
};

export default GenreList;