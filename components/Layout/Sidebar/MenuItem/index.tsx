import React, { useEffect } from "react";
// import { useRouter } from "next/router";
import { MenuItemContainer } from "./styles";
import { Route } from "@/types";
import { useRouter, usePathname } from "next/navigation";

interface MenuProps {
  info?: Route;
}
const MenuItem: React.FC<MenuProps> = ({ info }) => {
  const itemInfo = { ...info };
  const currentPath = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    return currentPath.indexOf(path) > -1;
  };
  const active = isActive(itemInfo.path);

  const handleRedirect = (path: any) => {
    console.log(path);
    router.push(path)
  };

  return (
    <MenuItemContainer
      active={active}
      onClick={() => handleRedirect(itemInfo.path)}
    >
      {itemInfo.id}
    </MenuItemContainer>
  );
};

export default MenuItem;
