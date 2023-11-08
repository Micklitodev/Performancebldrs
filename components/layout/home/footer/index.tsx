import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="w-full py-6 px-6 bg-white text-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700 sm:text-center">
            © {year}{" "}
            <Link href="http://www.google.com/" className="hover:underline">
              Performance Builders Inc
            </Link>
            . All Rights Reserved.
          </span>
          <nav className="space-x-4">
            <Link href="/page/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/page/privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
            <Link href="/page/TOS" className="hover:text-blue-300">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
