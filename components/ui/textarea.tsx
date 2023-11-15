import React from "react";

const Textarea: React.FC<{
  className: string;
  id: string;
  name: string;
  placeholder: string;
  value: any; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ id, placeholder, name, className, onChange, value}: any) => {
  return (
    <textarea
      className={`flex wrap rounded border text-zinc-600 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      id={id}
    />
  );
};

export default Textarea;
