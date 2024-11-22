import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"gold"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
