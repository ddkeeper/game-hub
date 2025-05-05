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
export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}
function App() {
    const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
                        selectedGenre={GameQuery.genre}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...GameQuery, genre })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <PlatformSelector
                    selectedPlatform={GameQuery.platform}
                    onSelectPlatform={(platform) =>
                        setGameQuery({ ...GameQuery, platform })
                    }
                ></PlatformSelector>
                <GameGrid gameQuery={GameQuery}></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
