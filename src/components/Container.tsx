import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Card from "./Card";
import data from "../Carddata";
import { ICard } from "../interface";


const StyledDiv = styled.div`
  display: grid;
  gap: 20px;
  padding: calc(2em + 3vw);
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
  align-items: center;

`;


function Container () {
  const [cardData, setCardData] = useState<ICard[]>([]);
  // Mimicking fetching data
  useEffect(() => {
    setCardData(data);
  }, []);

  const cardElem = cardData.map(elem => {
    return <Card key={elem.id} id={elem.id} info={elem.info} img={elem.img} />;
  });

  return (
    <StyledDiv>
      {cardElem}
    </StyledDiv>
  );
}

export default Container;