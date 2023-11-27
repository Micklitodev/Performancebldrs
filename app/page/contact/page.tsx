'use server'

import { NextPage } from "next";
import ContactForm from "@/components/contact/contactform";
import { Suspense } from "react";

const Contact:  NextPage = async (): Promise<JSX.Element> => {
  return (
    <>
      <Suspense>
        <main
          className={`flex flex-col items-center justify-center p-4 md:p-8 min-h-screen`}
        >
          <ContactForm />
        </main>
      </Suspense>
    </>
  );
};

export default Contact;
