import ProjectComponent from "@/components/project/projectcomponent";
import { NextPage } from "next";
import { Suspense } from "react";

const Projects: NextPage<any> = async () => {
  return (
    <>
      <Suspense>
        <main
          className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
          <ProjectComponent />
        </main>
      </Suspense>
    </>
  );
};

export default Projects;
