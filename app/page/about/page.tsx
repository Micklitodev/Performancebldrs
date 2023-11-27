"use server";

import AboutComponent from "@/components/about/about";
import { NextPage } from "next";
import { Suspense } from "react";

const About: NextPage = (): JSX.Element => {
  return (
    <Suspense>
      <div className="items-center mt-10 mb-20">
        <AboutComponent />
      </div>
    </Suspense>
  );
};

export default About;
