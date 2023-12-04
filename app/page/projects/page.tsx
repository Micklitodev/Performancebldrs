'use server'
import ProjectComponent from "@/components/project/projectcomponent";
import { NextPage } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation"

const Projects: NextPage = async (): Promise<JSX.Element> => {

  return (
    <>
      <Suspense>
        <main
          className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
       {/*   <ProjectComponent /> */ } 
       {redirect('/')}
       
        </main>
      </Suspense>
    </>
  );
};

export default Projects;
