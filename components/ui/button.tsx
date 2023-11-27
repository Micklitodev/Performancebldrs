import React from "react";

const Button: React.FC<any> = ({ children, className, onClick}: any) => {
  return (
    <button onClick={onClick} className={`px-2 py-2 border rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
