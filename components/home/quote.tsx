import Button from "../ui/button";

const GetQuote: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="py-20 px-20 bg-gray-100 text-gray-700 text-center">
        <h1 className="text-5xl font-bold"> Create with Us </h1>
        <p className="mt-4 text-xl">
          Elevate your commercial construction experience with our exceptional
          services, marked by top-notch quality and
          unmatched value. Our dedicated team ensures transparent,
          integrity-driven project delivery that not only meets but exceeds
          expectations.
        </p>
        <Button className="mt-6 bg-white shadow-lg">Get a Quote</Button>
      </section>
    </>
  );
};

export default GetQuote;
