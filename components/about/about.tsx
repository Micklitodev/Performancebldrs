import Link from "next/link";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-10 mb-8 md:mb-20">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl mb-6 md:mb-10 font-bold text-zinc-700 tracking-tighter sm:text-5xl">
              About Our Company
            </h2>
            <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              We are a leading company in the industry, committed to providing
              excellent services and products.
            </p>
            <div className="flex flex-col items-center md:flex-row md:space-x-4">
              <Image
                width={448}
                height={200}
                style={{ height: 200 }}
                alt="Performance Builders Work"
                src="/PBgallery/2.jpg"
                className="rounded mb-2 md:mb-0"
              />
              <Image
                width={448}
                height={200}
                style={{ height: 200 }}
                alt="Performance Builders Work"
                src="/PBgallery/3.jpg"
                className="rounded"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {/* Mission Section */}
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Our Mission</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-500">
              We are dedicated to delivering top-notch services. Specializing in
              demolition and ground-up construction for commercial buildings,
              our commitment is to provide excellence in our services. We strive
              to bring ease to every phase of your project.
            </p>
          </div>
          {/* Values Section */}
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Our Values</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-500">
              Our dedication lies in delivering excellent, easy and efficient
              experiences, ensuring that integrity, innovation, and customer
              satisfaction remain at the forefront of every project we
              undertake.
            </p>
          </div>
          {/* Vision Section */}
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Our Vision</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-500">
              Striving to be a globally recognized brand celebrated for
              innovation and sustainability. Committed to delivering exceptional
              services, our company is dedicated to setting industry standards,
              solidifying our position as a leader in the global construction
              arena.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            className="inline-flex text-zinc-950 h-10 items-center justify-center rounded-md border border-zinc-200 border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
            href="/page/projects"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
