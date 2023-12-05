import React from "react";

const Card: React.FC<any> = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-[550px] p-6 bg-zinc-850 shadow-lg rounded-lg justify-between max-w-[340px] sm:min-w-[550px] ">
      {children}
    </div>
  );
};

const CardContent: React.FC<any> = ({ children }: any) => {
  return <div>{children}</div>;
};

export { CardContent, Card };
