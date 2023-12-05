'use server'

import { NextPage } from "next";
import ContactForm from "@/components/contact/contactform";
import ContactInfo from "@/components/contact/contactinfo";
import { Suspense } from "react";

const Contact: NextPage = async (): Promise<JSX.Element> => {
  return (
    <>
      <Suspense>
        <main className={`flex flex-col items-center justify-center p-4 md:p-8 min-h-screen`}>
          <h2 className="text-3xl mb-8 font-bold text-zinc-700 tracking-tighter text-center sm:text-5xl">
            Contact Us
          </h2>
          <div className="sm:flex">
            <div className="sm:mr-10">
              <ContactInfo />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </main>
      </Suspense>
    </>
  );
};

export default Contact;
