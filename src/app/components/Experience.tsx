import { Typography } from "@material-tailwind/react";

interface ExperienceDetails {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export default function ExperienceCard({title, company, startDate, endDate, description}: ExperienceDetails) {
    return (
        <div className="bg-dark-gray-lighter w-4/5 mx-auto rounded-md shadow-md p-5 my-10 max-w-6xl dark:bg-cyan-100">
            <Typography
                variant="h4"
                color="white"
                className="font-montserrat font-semibold text-center my-3 text-cyan-300 dark:text-blue-800"
            >
                {title}
            </Typography>
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
            {description.map((item,key) => (
                <Typography color="white"
                className="my-5 font-montserrat font-medium text-center text-sm text-white dark:text-black max-w-3dssssssssxl mx-auto" key={key}>
                    {item}
                </Typography>
            ))}
        </div>
    );
}
