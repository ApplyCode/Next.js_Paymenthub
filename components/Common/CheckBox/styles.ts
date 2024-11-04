import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid #b5b5ba;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  &:checked {
    background-color: #4caf50;
    border-color: #4caf50;
  }
  &:checked::before {
    content: "\2713";
    position: absolute;
    top: 1px;
    left: 4px;
    color: white;
    font-size: 16px;
  }
`;

export const StyledCheckbox = styled.div<{
  checked: boolean;
}>`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.checked ? "#333" : "white")};
  border: 2px solid #333;
  border-radius: 6px; /* Rounded corners */
  transition: all 150ms;
  cursor: pointer;

  /* Optional focus state */
  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`;

export const A = styled.a`
  color: #f53103;
  text-decoration: underline;
  cursor: pointer;
`;

export const Label = styled.label<{ density: boolean, italic: boolean }>`
text-align: left
  margin-left: 11px;
  font-size: 18px;
  font-style: ${(props) => (props.italic ? "Italic" : "")};
  color: ${(props) => (props.density ? "#24232B" : "#868686")};
`;
