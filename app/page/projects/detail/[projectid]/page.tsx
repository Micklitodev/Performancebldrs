'use server'

import ProjectCarousel from "@/components/projectDetail/projectDetail";
import { NextPage } from "next";

const ProjectDetPage:  NextPage = (): JSX.Element => {
  return (
    <>
      <ProjectCarousel />
    </>
  );
};

export default ProjectDetPage;
