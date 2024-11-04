import React from "react";
import MenuItem from "./MenuItem";
import { Route } from "../../../types";
import { CloseButtonContainer, SidebarContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Common/Button";

interface SidebarProps {
  openside: boolean;
  setopenside: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const { openside, setopenside } = props;
  const routes: Route[] = [
    {
      id: "Payven Hub",
      label: "Home",
      path: "/home",
    },
    {
      id: "Submit",
      label: "submit",
      path: "/submit",
    },
  ];

  const handleCloseSidebar = () => {
    setopenside(false);
  };

  return (
    <>
      <SidebarContainer openside={openside}>
        <CloseButtonContainer>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ fontSize: "30px", color: "#f53103" }}
            onClick={(e) => {
              handleCloseSidebar();
            }}
          />
        </CloseButtonContainer>
        {routes.map((router: Route) => (
          <MenuItem key={router.id} info={router} />
        ))}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
