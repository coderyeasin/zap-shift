import type { ReactNode } from "react";
import Header from "../Header/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
