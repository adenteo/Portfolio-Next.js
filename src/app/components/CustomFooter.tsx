import { Typography } from "@material-tailwind/react";
 
export default function SimpleFooter() {
  return (
    <footer className="lg:p-5 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-dark-gray-lighter dark:border-gray-200 py-6 text-center md:justify-between">
      <Typography color="white" className="font-montserrat dark:text-black font-normal">
        &copy; 2023 Aden Teo
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-montserrat dark:text-black font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Back to top
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-montserrat dark:text-black font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact me
          </Typography>
        </li>
      </ul>
    </footer>
  );
}