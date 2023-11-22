const Services: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="py-20 px-6 bg-white" id="Services">
        <h2 className="text-4xl font-bold text-center text-gray-700">
          Our Services
        </h2>
        <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4">
            <svg
              className=" h-16 w-16 text-blue-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
              <path d="M9 22v-4h6v4" />
              <path d="M8 6h.01" />
              <path d="M16 6h.01" />
              <path d="M12 6h.01" />
              <path d="M12 10h.01" />
              <path d="M12 14h.01" />
              <path d="M16 10h.01" />
              <path d="M16 14h.01" />
              <path d="M8 10h.01" />
              <path d="M8 14h.01" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-600">
              Construction
            </h3>
            <p className="text-gray-600 lg:max-w-[300px] sm:max-w-[400px] text-center">
              Experience tailored construction solutions to fit your needs and
              budget, delivered with uncompromising quality. Our dedicated
              services are designed to meet your unique requirements, ensuring a
              seamless and cost-effective construction experience. Trust us for
              reliable and budget-friendly construction solutions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <svg
              className=" h-16 w-16 text-blue-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-600 ">
              Renovation
            </h3>
            <p className="text-gray-600 lg:max-w-[300px] sm:max-w-[400px] text-center">
              Transform your space with our renovation services, bringing a
              fresh and innovative touch to your environment. Our expert team is
              dedicated to revitalizing your surroundings, creating a new and
              inspiring ambiance for you to enjoy. Experience the difference as
              we breathe new life into your space through our transformative
              renovation services.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <svg
              className=" h-16 w-16 text-blue-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 22h-2" />
              <path d="M20 15v2h-2" />
              <path d="M4 19.5V15" />
              <path d="M20 8v3" />
              <path d="M18 2h2v2" />
              <path d="M4 11V9" />
              <path d="M12 2h2" />
              <path d="M12 22h2" />
              <path d="M12 17h2" />
              <path d="M8 22H6.5a2.5 2.5 0 0 1 0-5H8" />
              <path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-700">
              Design & Planning
            </h3>
            <p className="text-gray-600 lg:max-w-[300px] sm:max-w-[400px] text-center">
              Maximize the potential of your space with our assistance in
              planning and designing. Our dedicated team is here to help you
              optimize your environment, ensuring you get the most out of your
              space. Count on us for expert guidance in creating functional and
              aesthetically pleasing spaces tailored to your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
