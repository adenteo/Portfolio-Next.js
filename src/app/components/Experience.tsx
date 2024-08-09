import { Typography } from "@material-tailwind/react";
import Image from "next/image";

interface ExperienceDetails {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo: string;
}

export default function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  description,
  logo,
}: ExperienceDetails) {
  return (
    <div className="bg-dark-gray-lighter w-4/5 mx-auto rounded-md shadow-md p-5 my-10 max-w-6xl dark:bg-cyan-100">
      <Typography
        variant="h4"
        color="white"
        className="font-montserrat font-semibold text-center text-cyan-300 dark:text-blue-800"
      >
        {title}
      </Typography>
      <Image
        src={logo}
        alt="company_logo"
        width="200"
        height="200"
        className="mx-auto m-4 rounded-full"
      />
      <Typography
        color="white"
        className="font-montserrat font-medium text-center text-cyan-300 dark:text-blue-800"
      >
        {company}
      </Typography>
      <Typography
        color="white"
        className="font-montserrat font-medium text-center text-cyan-300 text-xs dark:text-blue-800"
      >
        {startDate} - {endDate}
      </Typography>
      {description.map((item, key) => (
        <Typography
          color="white"
          className="my-5 font-montserrat font-medium text-sm text-white dark:text-black max-w-3dssssssssxl mx-auto w-4/5"
          key={key}
        >
          {item}
        </Typography>
      ))}
    </div>
  );
}
