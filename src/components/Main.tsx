import React, { useState } from "react";

import Container from "./Container";
import ScoreBoard from "./ScoreBoard";
import { ICard } from "../interface";


function Main () {
  const [cardPickedArr, setCardPickedArr] = useState<ICard[]>([]);

  

  return (
    <main>
      <ScoreBoard />
      <Container />
    </main>
  );
}

export default Main;