import React from "react";
import Image from "next/image";
import mark from "@/assets/images/mark/mark.svg";
import {
  ButtonGroup,
  IconContainer,
  LogoContainer,
  TopbarContainer,
} from "./styles";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface TopbarInterface {
  setopenside: () => void;
}

const Topbar = (props: TopbarInterface) => {
  const { setopenside } = props;
  const router = useRouter();

  const handleClick = (pathInfo: string) => {
    router.push(pathInfo);
  };

  const handleopensidebar = () => {
    setopenside(true);
  };

  return (
    <TopbarContainer>
      <LogoContainer>
        <Image src={mark} width={207} height={25} alt="sad" />
      </LogoContainer>
      <ButtonGroup>
        <Button
          onClick={(e) => {
            handleClick("/auth/signin");
          }}
          pattern="outlined"
          fontSize="lg"
          fullwidth={false}
        >
          Sign In
        </Button>
        <Button
          onClick={(e) => {
            handleClick("/auth/signup");
          }}
          pattern="outlined"
          fontSize="lg"
          fullwidth={false}
        >
          Sign Up
        </Button>
      </ButtonGroup>
      <IconContainer>
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "30px" }}
          onClick={(e) => {
            handleopensidebar();
          }}
        />
      </IconContainer>
    </TopbarContainer>
  );
};

export default Topbar;
