import React from "react";
import Image from "next/image";

type LogoProps = {
  size?: number | null;
};

export default function LogoIcon({ size }: LogoProps) {
  let h = 100;
  let w = 100;

  if (size) {
    h = size;
    w = size;
  }

  return (
    <Image
      className="absolute"
      height={h}
      width={w}
      src="/cover.png"
      alt="logo"
      priority
    />
  );
}
