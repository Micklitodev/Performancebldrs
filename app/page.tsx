import { NextPage } from "next";
import Head from "@/components/home/head";
import FeaturedProjects from "@/components/home/project";
import GetQuote from "@/components/home/quote";
import Services from "@/components/home/services";
import ClientLogos from "@/components/home/clients";

const Home: NextPage<any> = async () => {
  return (
    <>
      <Head />
      <GetQuote />
      <Services /> 
      <FeaturedProjects /> 
      <ClientLogos /> 
    </>
  );
};

export default Home;
