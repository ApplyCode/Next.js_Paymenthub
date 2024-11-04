import styled from "styled-components";

const backgroundColor = {
 fill: "#F53103",
 outlined: "#FFFFFF"
};

const color = {
    fill: "#FFFFFF",
    outlined: "#F53103"
}

const fontsize = { 
  sm: 14,
  md: 18,
  lg: 22,
};

const paddingY = {
  sm: 17,
  md: 10,
  lg: 8,
};

const paddingX = {
    sm: 32,
    md: 44,
    lg:22,
}

const fontWeight = {
    sm: 700,
    md: 600,
    lg: 500
}

const borderRadius = {
    sm: 32,
    md: 100,
    lg: 100
}


export const ButtonContainer = styled.button<{
    pattern: "fill" | "outlined";
    fontSize: "sm" | "md" | "lg";
  fullWidth: boolean;
  mb: number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? `100%` : `auto`)};
  padding: ${(props) => `${paddingY[props.fontSize]}px ${paddingX[props.fontSize]}`}px;
  border-width: 2px;
  border-color: #F53103;
  border-style: solid;
  border-radius: ${(props) => borderRadius[props.fontSize]}px;
  background: ${(props) => backgroundColor[props.pattern]};
  font-weight: ${(props) => fontWeight[props.fontSize]};
  font-size: ${(props) => fontsize[props.fontSize]}px;
  color: ${(props) => color[props.pattern]};
  cursor: pointer;
  transition: 0.2s;
  margin-bottom: ${(props) => props.mb || 0}px;

  &:hover {
    background: #F53103;
    color: #FFFFFF;
  }
`;
