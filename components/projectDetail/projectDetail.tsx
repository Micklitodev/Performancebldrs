'use client'
import imgPaths from "@/utils/imageLoader";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const windowStyle: React.CSSProperties = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
};


const ProjectDetail: React.FC = (): JSX.Element => {
    const pathname = usePathname();
    const selectedProj: any = useMemo(() => pathname.split("/").pop(), [pathname]);
    const imagePaths = useMemo(() => imgPaths(selectedProj), [selectedProj]);

    return (
        <div className="flex py-2 py-4 mr-4 ml-4 flex-col-reverse md:flex-row mt-10">
            <div className="md:w-2/3 md:mr-4">
                <div
                    style={{
                        ...windowStyle,
                    }}
                    className="text-center mb-4 md:mb-0"
                >
                    <div className="ml-4 md:ml-0" style={{ maxWidth: "100%" }}>
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            thumbWidth={40}
                        >
                            {imagePaths.map((slideImage: any, index: number) => (
                                <div key={index}>
                                    <Image
                                        src={`${slideImage.default.src}`}
                                        alt={`Projects ${index + 1}`}
                                        className="aspect-[1/1] object-cover object-center rounded-md mx-auto"
                                        height={100}
                                        width={500}
                                        style={{ maxHeight: 500, maxWidth: "100%" }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="md:w-1/3">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl mb-4 font-bold text-zinc-700 tracking-tighter md:text-5xl">
                        {selectedProj}
                    </h2>
                    <hr className="mb-4" />
                    {selectedProj === "Fayetteville" ? (
                        <p className="max-w-[400px] text-zinc-600 mx-auto md:max-w-none md:text-left">
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
                        <p className="max-w-[400px] text-zinc-600 mx-auto md:max-w-none md:text-left">
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
                        <p className="max-w-[400px] text-zinc-600 mx-auto md:max-w-none md:text-left">
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