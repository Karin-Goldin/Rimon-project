import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h2 className="basis-1/4 font-montserrat text-3xl font-bold">{children}</h2>
  );
};

export default HText;
