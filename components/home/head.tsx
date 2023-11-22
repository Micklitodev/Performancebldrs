import Link from "next/link";
import Image from "next/image";

const Head: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col bg-white">
          <main className="flex-grow">
            <section className="w-full py-12">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <Image
                    alt="Construction"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                    height="550"
                    src="/building3.jpg"
                    width="550"
                  />
                  <div className="flex flex-col justify-center ml-4 space-y-6">
                    <div className="space-y-10">
                      <h1 className="text-3xl font-bold text-zinc-700 tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Building the Future
                      </h1>
                      <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-500">
                        We specialize in delivering timely and budget-conscious
                        construction services. With a dedicated team of
                        professionals, we ensure meticulous planning, execution,
                        and management for your projects. Choose us as your
                        construction partner for turning your vision into
                        reality.
                      </p>
                    </div>
                    <br />
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                        href="#Services"
                      >
                        Our Services
                      </Link>
                      <Link
                        className="inline-flex zinc-950 h-10 items-center justify-center rounded-md border border-zinc-200 border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                        href="/page/contact"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Head;
