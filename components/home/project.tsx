import Image from "next/image";

const FeaturedProjects: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-700">
          Our Projects
        </h2>
        <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center items-center">
            <Image
              alt="Project 1"
              className="rounded-lg object-cover"
              height="200"
              src="/building3.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              alt="Project 2"
              className="rounded-lg object-cover"
              height="200"
              src="/building2.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              alt="Project 3"
              className="rounded-lg object-cover"
              height="200"
              src="/building1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
