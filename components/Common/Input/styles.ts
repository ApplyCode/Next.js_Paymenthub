import styled from "styled-components";

const topMove = {
  primary: -10,
  secondary: -20,
  search: 0,
};

const inputHeight = {
  primary: 50,
  secondary: 48,
  search: 40,
};

const toLeft = {
  primary: 25,
  secondary: 15,
  search: 25,
};

const toFontStyle = {
  primary: "Italic",
  secondary: "",
  search: "Italic",
};

const labelFontSize = {
  primary: 18,
  secondary: 12,
  search: 18,
};
const labelFontWeight = {
  primary: 400,
  secondary: 700,
  search: 400,
};

const labelColor = {
  primary: "#B5B5BA",
  secondary: "#747378",
  search: "#B5B5BA",
};

const letterSpacing = {
  primary: 0,
  secondary: 3,
  search: 0,
};

export const InputContainer = styled.div<{
  mb: 0;
}>`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const StyledLabel = styled.label<{
  pattern: "primary" | "secondary" | "search";
}>`
  position: absolute;
  top: ${(props) => topMove[props.pattern]}px;
  left: ${(props) => toLeft[props.pattern]}px;
  font-weight: ${(props) => labelFontWeight[props.pattern]};
  font-style: ${(props) => toFontStyle[props.pattern]};
  background-color: white; /* Background matches the form */
  padding: 0px 8px; /* Small padding around the label */
  font-size: ${(props) => labelFontSize[props.pattern]}px;
  color: ${(props) => labelColor[props.pattern]};
  letter-spacing: ${(props) => letterSpacing[props.pattern]}px;
`;

export const StyledInput = styled.input<{
  pattern: "primary" | "secondary" | "search";
}>`
  width: 100%;
  height: ${(props) => inputHeight[props.pattern]}px;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ddd; /* Light grey border */
  border-radius: 30px; /* Rounded corners */
  outline: none;
  placeholder: ${(props) => (props.pattern == "search" ? "search" : "unset")}
  color: #333;
  background-color: transparent;

  &:focus {
    border-color: #aaa; /* Slightly darker border when focused */
  }

    &::placeholder {
    color: #B8B8B8;
    font-style: Italic;
    font-size: 18px;
    font-weight: 400;
    }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  rows: 4;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ddd; /* Light grey border */
  border-radius: 30px; /* Rounded corners */
  outline: none;
  color: #333;
  background-color: transparent;

  &:focus {
    border-color: #aaa; /* Slightly darker border when focused */
  }
`;
