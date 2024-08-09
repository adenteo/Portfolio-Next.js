import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface ExtraExperienceDetails {
  title: string;
  award: string | "";
  description: string[];
  picture?: string;
  link?: string;
}

export default function ExtraExperienceCard({
  title,
  award,
  description,
  picture,
  link,
}: ExtraExperienceDetails) {
  return (
    <div className="bg-dark-gray-lighter w-4/5 mx-auto rounded-md shadow-md p-5 my-10 max-w-6xl dark:bg-cyan-100">
      <Typography
        variant="h4"
        color="white"
        className="font-montserrat font-semibold text-center my-3 dark:text-white"
      >
        {title}
      </Typography>
      <Typography
        color="white"
        className="font-montserrat font-bold text-center text-cyan-300 dark:text-blue-800"
      >
        {award}
      </Typography>
      {picture && (
        <Image
          src={picture}
          alt="award_picture"
          width="400"
          height="300"
          className="mx-auto m-4"
        />
      )}
      {description.map((item, key) => (
        <Typography
          color="white"
          className="my-5 font-montserrat font-medium text-sm text-start text-white dark:text-black max-w-3xl mx-auto"
          key={key}
        >
          {item}
        </Typography>
      ))}
      {link && (
        <Button
          onClick={() => window.open(link)}
          size="lg"
          fullWidth={true}
          color="cyan"
          className="font-montserrat normal-case dark:bg-blue-500"
        >
          View Project
        </Button>
      )}
    </div>
  );
}
