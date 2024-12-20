import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
    //Games
    //Action Games (Genre)
    //Xbox Games (Platform)
    //Xbox Action Games (Platform Genre)

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginBottom={3}>{heading}</Heading>
  )
}

export default GameHeading