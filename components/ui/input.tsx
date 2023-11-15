import React from "react";
import { InputProps } from "@/lib/types";

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  className, 
  onChange,
  value

}: any) => {
  return (
    <input
      className={`${className} rounded py-2 px-2 flex wrap border  text-zinc-800`}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
