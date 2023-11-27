import Image from "next/image";
import Link from "next/link";

const FeaturedProjects: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-700">
          Our Projects
        </h2>
        <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center items-center">
            <Link href="/page/projects/detail/Milton" aria-label="Milton project images">
              <p className="text-zinc-700 text-xl py-2 text-center"> Milton </p>
              <Image
                alt="Milton project"
                className="rounded-lg object-cover"
                height="200"
                src="/Milton/Photo_0.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover", 
                }}
                width="300"
              />
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <Link href="/page/projects/detail/Paddocks" aria-label="Paddocks project images">
              <p className="text-zinc-700 text-xl py-2 text-center">
                {" "}
                Paddocks{" "}
              </p>
              <Image
                alt="Paddocks project"
                className="rounded-lg object-cover"
                height="200"
                src="/Paddocks/Photo_0.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link href="/page/projects/detail/Fayetteville" aria-label="Fayetteville project images">
              <p className="text-zinc-700 text-xl py-2 text-center">
                Fayetteville
              </p>
              <Image
                alt="Fayetteville project"
                className="rounded-lg object-cover"
                height="200"
                src="/Fayetteville/Photo_0.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
