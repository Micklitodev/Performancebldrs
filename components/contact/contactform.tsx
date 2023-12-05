"use client";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useState } from "react";
import { FormData } from "@/lib/types";

export default function ContactForm(): JSX.Element {
  const lambdaFuncEP: any = process.env.NEXT_PUBLIC_LAMBDA_URI;
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });

  const sendMail = async (mail: any) => {
    try {
      const res = await fetch(lambdaFuncEP, {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromEmail: mail.email,
          name: mail.name,
          message: mail.message,
        }),
      }).then((res) => console.log(res));
    } catch (Error) {
      console.log(Error);
    } finally {
      setTimeout(() => {
        window.location.assign("/");
      }, 5000);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      sendMail(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setFormData({
        email: "",
        name: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-full float-right">
      <Card>
        <CardContent>
          <h2 className="text-3xl mb-6 font-bold text-zinc-700 tracking-tighter text-center sm:text-4xl">
            Have us contact you
          </h2>
          <p className="text-gray-500 mb-4 text-center">
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full p-2 rounded"
                />
              </div>

              <div className="space-y-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  value={formData.email}
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full p-2 rounded min-h-[200px]"
                  value={formData.message}
                />
              </div>

              <Button
                onClick={handleSubmit}
                type="submit"
                className="w-full p-2 bg-black text-white"
                ariaLabel='send message'
              >
                Send message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>

  );
}
