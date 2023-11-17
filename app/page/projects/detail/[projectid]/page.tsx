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
          <Carousel showArrows={true} infiniteLoop={true} showThumbs={true} thumbWidth={40}>
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
          <p className="max-w-[400px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
