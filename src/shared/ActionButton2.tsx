import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton2 = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-gray-700 text-white px-10 py-2  hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.AboutUs)}
      href={`#aboutus`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton2;
