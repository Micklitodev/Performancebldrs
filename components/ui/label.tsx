import React from "react";
import { LabelProps } from "@/lib/types";

const Label: React.FC<LabelProps> = ({ className, htmlFor, children }: LabelProps) => {
  return <label className={className} htmlFor={htmlFor}>{children}</label>;
};

export default Label;
