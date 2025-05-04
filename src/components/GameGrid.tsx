import { Text, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
//import Game from "../hooks/useGames";
const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10"
                spacing={10}
            >
                {isLoading &&
                    skeletons.map((Skeleton) => (
                        <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
                    ))}
                {games.map((game) => (
                    <GameCard key={game.id} game={game}></GameCard>
                ))}
            </SimpleGrid>
        </>
    );
};
export default GameGrid;
