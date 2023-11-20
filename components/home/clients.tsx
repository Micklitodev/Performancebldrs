'use client'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const slideImages = [
  {
    url: "/ClientBrands/ace.png",
  },
  {
    url: "/ClientBrands/att.png",
  },
  {
    url: "/ClientBrands/crunch.png",
  },
  {
    url: "/ClientBrands/fivebelow.png",
  },
  {
    url: "/ClientBrands/homegoods.png",
  },
  {
    url: "/ClientBrands/rackroomshoes.png",
  },
  {
    url: "/ClientBrands/tjmaxx.png",
  },
  {
    url: "/ClientBrands/verizon.png",
  },
];

const ClientLogos = () => {
  return (
    <div className="py-10 px-0">
      <div id="certs" className="text-center">
        <h2 className="text-4xl font-bold text-center text-gray-700">
          Trusted Brands We've Built
        </h2>
        <br />
        <div className="flex justify-center">
          <div style={{ width: "100%" }}>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              centerMode={true}
              centerSlidePercentage={20} 
            >
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <Image
                    height={200}
                    width={200}
                    src={slideImage.url}
                    alt={`client logo`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
