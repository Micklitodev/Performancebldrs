"use client";

import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", description: "" });

  const handleFormSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md p-8 mt-6 rounded shadow-md">
        <CardContent>
        <h2 className="text-3xl mb-10 font-bold text-zinc-700 tracking-tighter text-center sm:text-5xl">
                Contact Us
              </h2>
          <p className="text-gray-500 mb-8 text-center">
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  id="first-name"
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="last-name"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="w-full p-2 rounded min-h-[200px]"
              />
            </div>

            <Button
              onClick={handleFormSubmit}
              className="w-full p-2 bg-black text-white"
            >
              Send message
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
