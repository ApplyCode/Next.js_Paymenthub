import React from "react";
import { Description, Title } from "./styles";
import { CardContainer } from "./styles";

interface CardProps {
  active: {
    country: string;
    selected: string;
  };
  country: string;
  title: string;
  description?: string;
  size?: "sm" | "lg";
  setActive: () => void;
}

const Card: React.FC<CardProps> = ({
  active,
  title,
  description,
  size = "lg",
  setActive,
  country,
}) => {
  const isActive = () => {
    return country == active.country && title == active.selected ? true : false;
  };

  const itemActive = isActive();

  const handleClick = () => {
    itemActive
      ? setActive({ country: "", selected: "" })
      : setActive({ country: country, selected: title });
  };
  return (
    <CardContainer
      onClick={(e) => {
        handleClick();
      }}
      active={itemActive}
      size={size}
    >
      <Title active={itemActive}>{title}</Title>
      {description && <Description active={itemActive}>{description}</Description>}
    </CardContainer>
  );
};

export default Card;
