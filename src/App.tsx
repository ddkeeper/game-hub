import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
//import { ColorModeToggle } from "./components/color-mode-toggle";

function App() {
    const [seletedGenre, setSeletedGenre] = useState<Genre | null>(null); // add generic type argument
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar></NavBar>
            </GridItem>
            <Show above={"lg"}>
                <GridItem area="aside" padding={5}>
                    <GenreList
                        onSelectGenre={(genre) => setSeletedGenre(genre)}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid selectedGenre={seletedGenre}></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
