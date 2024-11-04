import React from "react";
import { CheckboxContainer, HiddenCheckbox, Label, A } from "./styles";

const CheckBox = ({
  italic,
  density,
  label,
  aLink,
}: {
  italic?: boolean;
  density?: boolean;
  label: string;
  aLink?: string;
}) => (
  <CheckboxContainer>
    <HiddenCheckbox id="checkbox" />
    <Label htmlFor="checkbox" italic={italic} density={density}>
      {label} {aLink && <A>{aLink}</A>}
    </Label>
  </CheckboxContainer>
);

export default CheckBox;
