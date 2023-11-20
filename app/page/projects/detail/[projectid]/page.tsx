"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { usePathname } from "next/navigation";
import imgPaths from "@/utils/imageLoader";

const windowStyle: React.CSSProperties = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ProjectDetail = () => {
  let selectedProj: any;

  const pathname = usePathname();
  selectedProj = pathname.split("/").pop();

  let imagePaths = imgPaths(selectedProj);

  return (
    <div className="flex mt-10">
      <div
        style={{
          ...windowStyle,
        }}
        className="inline-block"
      >
        <div className="text-center">
          <br />
          <div className="ml-10" style={{ maxWidth: 770 }}>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={true}
              thumbWidth={40}
            >
              {imagePaths.map((slideImage: any, index: number) => (
                <div key={index}>
                  <img
                    src={`${slideImage.default.src}`}
                    alt={`Project Img ${index + 1}`}
                    className="aspect-[1/1] object-cover object-center rounded-md"
                    style={{ maxHeight: 500, maxWidth: 800 }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="float-right flex inline justify-center ml-14 mt-4">
        <div>
          <h2 className="text-3xl mb-10 font-bold text-zinc-700 text-center tracking-tighter sm:text-5xl">
            {selectedProj}
          </h2>
          <hr />
          {selectedProj === "Fayetteville" ? (
            <p className="max-w-[400px]">
              Welcome to Performance Builders, where dreams become structures!
              Our recent triumph involves constructing a state-of-the-art
              Verizon store from the ground up on a once vacant lot.
              Meticulously planning every step, our team expertly demolished the
              existing structure to make way for the innovative design demanded
              by our client. The result is a sleek, contemporary store exceeding
              both client and community expectations. At Performance Builders,
              we thrive on turning challenges into opportunities. This Verizon
              store exemplifies our ability to seamlessly blend innovation,
              sustainability, and functionality in all our construction
              endeavors. Explore our portfolio to witness the transformative
              journey from a vacant lot to a vibrant Verizon store, a beacon of
              architectural prowess in the heart of the community.
            </p>
          ) : null}
          {selectedProj === "Milton" ? (
            <p className="max-w-[400px]">
              Welcome to Performance Builders, where we bring architectural
              dreams to life! Our latest accomplishment involves the
              construction of state-of-the-art doctor's offices tailored for
              Northside Hospital. Transforming an untouched parcel into modern
              healthcare facilities, our team orchestrated a meticulous plan,
              ensuring the fusion of innovation and practicality. Demolishing an
              existing structure was a crucial step, allowing us to create a
              contemporary design that aligns seamlessly with our client's
              vision. At Performance Builders, we excel in turning obstacles
              into opportunities. The doctor's offices for Northside Hospital
              stand as a testament to our unwavering commitment to excellence in
              construction. Take a journey through our portfolio to witness the
              evolution from an open canvas to dynamic medical spaces,
              exemplifying our unique approach to enhancing healthcare
              environments with architectural flair.
            </p>
          ) : null}
          {selectedProj === "Paddocks" ? (
            <p className="max-w-[400px]">
              Welcome to Performance Builders, where visions take shape! Our
              recent achievement involves the construction of state-of-the-art
              doctor's offices for Northside Hospital. Erecting these
              cutting-edge facilities from the ground up on a previously
              undeveloped site, our team meticulously planned and executed every
              step, ensuring a seamless blend of innovation and functionality.
              The project required us to expertly demolish an existing
              structure, clearing the space for the contemporary design demanded
              by our client. At Performance Builders, we specialize in turning
              challenges into opportunities. The Northside Hospital doctor's
              offices showcase our commitment to excellence in construction,
              delivering spaces that exceed both client and community
              expectations. Explore our portfolio to witness the transformative
              journey from an empty space to vibrant medical facilities,
              standing as a testament to our architectural prowess in enhancing
              healthcare environments.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
