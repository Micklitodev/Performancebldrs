import Link from "next/link";

const AboutComponent = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 mb-40 mt-20">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl mb-10 font-bold text-zinc-700 tracking-tighter sm:text-5xl">
                About Our Company
              </h2>

              <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                We are a leading company in the industry, committed to providing
                excellent services and products. 
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Our Mission</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-500">
                
Dedicated to delivering top-notch services and products that enhance satisfaction and convenience for all our clients, we stand as a prominent leader in the construction industry. Specializing in demolition and ground-up construction for commercial buildings, our commitment is unwavering as we strive to provide excellence in both services and products. Trust us to bring expertise and quality to every phase of your commercial construction project.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Our Vision</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-500">
              Striving to be a globally recognized brand celebrated for innovation and sustainability, we stand as a prominent leader in the construction industry. Committed to delivering exceptional services and products, our company is dedicated to setting industry standards. Trust us to bring cutting-edge solutions and a commitment to sustainability to every project, solidifying our position as a leader in the global construction arena.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Our Values</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-500">
              Embracing values of integrity, innovation, and unwavering commitment to customer satisfaction, we stand as a leading force in the construction industry. Our dedication lies in delivering excellent services and products, ensuring that integrity, innovation, and customer satisfaction remain at the forefront of every project we undertake. Trust us for a construction experience that exemplifies these core values, setting us apart as industry leaders.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
              href="/page/contact"
            >
              Contact Us
            </Link>
            <Link
              className="inline-flex text-zinc-950 h-10 items-center justify-center rounded-md border border-zinc-200 border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
              href="/page/projects"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
