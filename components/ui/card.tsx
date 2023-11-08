import React from "react";

const Card: React.FC<any> = ({ children }: any) => {
  return (
    <div className="flex flex-col p-6 bg-zinc-850 shadow-lg rounded-lg justify-between">
      {children}
    </div>
  );
};

const CardContent: React.FC<any> = ({ children }: any) => {
  return <div>{children}</div>;
};

export { CardContent, Card };
