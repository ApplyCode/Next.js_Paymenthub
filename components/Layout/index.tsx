import React, { useState } from "react";
import { LayoutContainer, MainContainer } from "./styles";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [openside, setopenside] = useState<boolean>(false);
  return (
    <>
      <Topbar setopenside={setopenside} />
      <div style={{ display: "flex" }}>
        <Sidebar openside={openside ? true : false} setopenside={setopenside} />
        <MainContainer>{children}</MainContainer>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
