import React from "react";
import styled from "styled-components";

import { ICard } from "../interface";

const StyledCard = styled.div`
  width: 250px;
  height: 300px;
  padding: 1em;
  border: 1px solid grey;
`;

function Card (props: ICard) {
  return (
    <StyledCard>
      <p>{props.id}</p>
    </StyledCard>
  );
}

export default Card;