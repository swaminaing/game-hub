import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


function GameGrid() {
  const {games, error, isLoading} = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
