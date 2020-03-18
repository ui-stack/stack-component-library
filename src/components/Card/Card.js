import React from "react";
import StyledCard from "./Card.styled";

const Card = (props) =>{
    const{ color, bgColor, children, cardTitle, width, alignText, alignCard} =props;
    return(
        <StyledCard color={color} bgColor={bgColor} width={width} alignText={alignText} alignCard={alignCard}>
            <h3>{cardTitle}</h3>
            {children}
        </StyledCard>
    )
}

export default Card;