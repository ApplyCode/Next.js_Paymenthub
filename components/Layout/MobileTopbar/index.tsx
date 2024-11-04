import React from "react";
import Image from "next/image";
import mark from "@/assets/images/mark/mark.svg";
import { MarkContainer, MobileTopbarContainer } from "./styles";

const MobileTopbar = () => {
  return (
    <MobileTopbarContainer>
      <MarkContainer>
        <Image src={mark} width={207} height={75} alt=":( image not found" />
      </MarkContainer>
    </MobileTopbarContainer>
  );
};

export default MobileTopbar;
