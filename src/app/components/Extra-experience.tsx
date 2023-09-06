import { Typography } from "@material-tailwind/react";

interface ExtraExperienceDetails {
    title: string;
    award: string | "";
    description: string[];
}

export default function ExtraExperienceCard({title, award, description}: ExtraExperienceDetails) {
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
                {award}
            </Typography>
            {description.map((item,key) => (
                <Typography color="white"
                className="my-5 font-montserrat font-medium text-sm text-center text-white dark:text-black max-w-3dssssssssxl mx-auto w-4/5" key={key}>
                    {item}
                </Typography>
            ))}
        </div>
    );
}
