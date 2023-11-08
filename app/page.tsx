import { NextPage } from "next";
import Head from "@/components/home/head";
import FeaturedProjects from "@/components/home/project";
import GetQuote from "@/components/home/quote";
import Services from "@/components/home/services";

const Home: NextPage<any> = async () => {
  return (
    <>
      <Head />
      <GetQuote />
      <Services /> 
      <FeaturedProjects /> 
    </>
  );
};

export default Home;
