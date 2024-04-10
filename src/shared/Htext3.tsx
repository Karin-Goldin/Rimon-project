import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText3 = ({ children }: Props) => {
  return (
    <h2 className="basis-1/4 font-montserrat text-2xl font-bold">{children}</h2>
  );
};

export default HText3;
