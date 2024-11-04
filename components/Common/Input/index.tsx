import React from "react";
import {
  InputContainer,
  StyledInput,
  StyledLabel,
  StyledTextarea,
} from "./styles";

interface InputProps {
  pattern: "primary" | "secondary" | "search";
  textarea?: boolean;
  label: string;
  mb?: 0;
}

const Input: React.FC<InputProps> = ({
  pattern = "primary",
  textarea = false,
  mb = 0,
  label,
}) => {
  return (
    <InputContainer mb={mb}>
      <StyledLabel pattern={pattern}>{label}</StyledLabel>
      {textarea ? (
        <StyledTextarea rows={5} />
      ) : (
        <StyledInput
          placeholder={pattern == "search" ? "Search here..." : ""}
          pattern={pattern}
          type="text"
        />
      )}
    </InputContainer>
  );
};

export default Input;
