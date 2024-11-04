import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pattern?: "fill" | "outlined";
  fontSize?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullwidth?: boolean;
  style?: object;
  mb?: number;
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  pattern = "fill",
  fontSize = "md",
  children,
  fullwidth = false,
  mb = 0,
}) => {
  return (
    <ButtonContainer
      pattern={pattern}
      fontSize={fontSize}
      onClick={(e) => onClick(e)}
      fullwidth={fullwidth}
      mb={mb}
    >
      {children} 
    </ButtonContainer>
  );
};

export default Button;
