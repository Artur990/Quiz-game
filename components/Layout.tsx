import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <h1 className="bg-slate-700 text-black text-center ">Quiz game</h1>
      <main>{children}</main>;
    </>
  );
};

export default Layout;
