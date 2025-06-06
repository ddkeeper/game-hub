import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
//import Game from "../hooks/useGames";
interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    //const skeletons = [1, 2, 3, 4, 5, 6];
    const skeletons = Array.from({ length: 20 }, (_, index) => index + 1);
    if (error) return <Text>{error}</Text>;
    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10"
            spacing={6}
        >
            {isLoading &&
                skeletons.map((Skeleton) => (
                    <GameCardContainer key={Skeleton}>
                        <GameCardSkeleton></GameCardSkeleton>
                    </GameCardContainer>
                ))}
            {data.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};
export default GameGrid;
