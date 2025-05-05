import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformIconList from "./components/PlatformIconList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useData";
//import { ColorModeToggle } from "./components/color-mode-toggle";

function App() {
    const [seletedGenre, setSeletedGenre] = useState<Genre | null>(null); // add generic type argument
    const [seletedPlatform, setSeletedPlatform] = useState<Platform | null>(
        null
    );
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
                        selectedGenre={seletedGenre}
                        onSelectGenre={(genre) => setSeletedGenre(genre)}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <PlatformSelector
                    selectedPlatform={seletedPlatform}
                    onSelectPlatform={setSeletedPlatform}
                ></PlatformSelector>
                <GameGrid
                    selectedGenre={seletedGenre}
                    selectedPlatform={seletedPlatform}
                ></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
