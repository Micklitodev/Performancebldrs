import { NextPage } from "next";
import ContactForm from "@/components/contact/contactform";
import { Suspense } from "react";

const Contact: NextPage<any> = async () => {
  return (
    <>
      <Suspense>
        <main
          className={`flex flex-col min-h-screen items-center justify-between p-24`}
        >
          <ContactForm />
        </main>
      </Suspense>
    </>
  );
};

export default Contact;
