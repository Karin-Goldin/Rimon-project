import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText3Pink = ({ children }: Props) => {
  return (
    <h2 className="basis-1/4 font-montserrat text-2xl text-primary-500 font-bold">{children}</h2>
  );
};

export default HText3Pink;
