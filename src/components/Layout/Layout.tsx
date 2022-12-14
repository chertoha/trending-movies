import Header from "components/Header";
import { FC, ReactNode } from "react";

type LayoutPropsType = {
  children: ReactNode;
};

const Layout: FC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
