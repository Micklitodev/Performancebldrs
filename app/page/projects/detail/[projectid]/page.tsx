'use server'

import ProjectDetail from "@/components/projectDetail/projectDetail";
import { NextPage } from "next";

const ProjectDetPage:  NextPage = (): JSX.Element => {
  return (
    <>
      <ProjectDetail />
    </>
  );
};

export default ProjectDetPage;
