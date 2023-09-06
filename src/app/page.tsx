"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import CustomFooter from "./components/CustomFooter";
import ExperienceCard from "./components/Experience";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import { AiFillHtml5, AiFillChrome, AiOutlineDown } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { IoHardwareChipOutline } from "react-icons/io5";
import { MdOutlineSensorDoor, MdOutlineDarkMode } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
} from "@material-tailwind/react";
import ExtraExperienceCard from "./components/Extra-experience";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const updateDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const openNewTab = (url: string): void => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    const onClickUrl =
        (url: string): (() => void) =>
        () =>
            openNewTab(url);
    const experienceDescription__1 = ["• Increased limit of pending transactions from 16 to unlimited via implementation of boxes storage.", "•	Optimised the loading time of user assets by >50% through Redis Caching.", "•	Designed testcases to increase code coverage to 100%.", "• Improved user experience by identifying bugs and refining application interface."]
    const experienceDescription__2 = ["• Delivered 5+ small to medium-scale projects within a month.", "•	Developed Google Chrome extensions and Python automation scripts to enable continuous monitoring of E-commerce websites and automatic checkouts."]
    return (
        <main className={darkMode ? "dark bg-white" : ""}>
            <Navbar darkState={darkMode} setDarkState={updateDarkMode} />
            <section
                id="home"
                className="text-center text-sm text-white font-montserrat font-medium h-[95vh] flex flex-col"
            >
                <div className="my-auto px-8">
                    <h1 className="font-montserrat font-normal text-4xl bg-gradient-to-t from-cyan-400 to-cyan-900 text-transparent bg-clip-text lg:text-6xl">
                        Aden Teo
                    </h1>
                    <Image
                        src="/profile-pic-round.png"
                        alt="Aden Teo"
                        width={175}
                        height={175}
                        className="mx-auto my-5"
                    ></Image>
                    <h2 className="font-montserrat font-normal text-base lg:text-2xl dark:text-black">
                        Computer Engineering Undergraduate
                    </h2>
                    <h3 className="font-montserrat font-normal text-xs lg:text-xl dark:text-black">
                        National University of Singapore
                    </h3>
                    <div></div>
                    <p className="font-montserrat font-normal text-sm my-5 max-w-2xl mx-auto lg:text-base dark:text-black">
                        An aspiring Computer Engineer with a strong interest in
                        leveraging{" "}
                        <span className="text-cyan-300 dark:text-cyan-600">
                            blockchain
                        </span>{" "}
                        and{" "}
                        <span className="text-cyan-300 dark:text-cyan-600">
                            AI
                        </span>{" "}
                        technologies to improve lives. Feel free to connect with
                        me!
                    </p>
                    <div className="flex justify-center">
                        <a href="https://github.com/adenteo" target="_blank">
                            <BsGithub
                                size={30}
                                className="cursor-pointer hover:text-cyan-300 mx-5 dark:text-black dark:hover:text-cyan-400"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aden-teo/"
                            target="_blank"
                        >
                            <BsLinkedin
                                size={30}
                                className="cursor-pointer hover:text-cyan-300 mx-5 dark:text-black dark:hover:text-cyan-400"
                            />
                        </a>
                    </div>
                    <div className="my-10 hover:text-cyan-300 cursor-pointer animate-bounce dark:text-black dark:hover:text-cyan-400">
                        <a href="#projects">
                            Scroll down
                            <AiOutlineDown className="mx-auto" />
                        </a>
                    </div>
                </div>
            </section>
            <Typography
                variant="h2"
                color="white"
                className="font-montserrat font-normal text-center my-5  dark:text-black"
                id="projects"
            >
                Projects
            </Typography>
            <section className="p-8 grid lg:grid-cols-2 gap-y-10">
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto dark:bg-cyan-100">
                    <CardHeader
                        floated={false}
                        className="bg-transparent shadow-transparent"
                    >
                        <Image
                            src="/chrome-extension.png"
                            alt="e-commerce-checkout-extension"
                            width="300"
                            height="150"
                            className="mx-auto p-2"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="white"
                                className="font-montserrat font-semibold text-cyan-300 dark:text-blue-800"
                            >
                                E-commerce Checkout Extension
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat font-medium text-sm dark:text-black"
                        >
                            A custom Google Chrome extension designed to
                            automate purchasing processes on major e-commerce
                            websites, such as Shopify, Adidas and Nike, reducing
                            checkout duration by up to{" "}
                            <span className="text-cyan-300 dark:text-blue-800">
                                80%.
                            </span>
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="HTML">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <AiFillHtml5 size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="CSS">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoCss3 size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="JavaScript">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoJavascript size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="Chrome Extension API">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <AiFillChrome size={20} />
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3">
                        <Button
                            onClick={onClickUrl(
                                "https://github.com/adenteo/chromeExtension"
                            )}
                            size="lg"
                            fullWidth={true}
                            color="cyan"
                            className="font-montserrat normal-case dark:bg-blue-500"
                        >
                            View on Github
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto dark:bg-cyan-100">
                    <CardHeader
                        floated={false}
                        className="bg-transparent shadow-transparent my-auto"
                    >
                        <Image
                            src="/mobile-app.png"
                            alt="nus-sports-hub"
                            width="300"
                            height="100"
                            className="mx-auto p-2"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="white"
                                className="font-montserrat font-semibold text-cyan-300 dark:text-blue-800"
                            >
                                NUSports Hub
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat font-medium text-sm dark:text-black"
                        >
                            An all-in-one mobile application built for NUS
                            students{"'"} sporting needs.
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="React Native">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <FaReact size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="JavaScript">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoJavascript size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="Supabase">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <SiSupabase size={20} />
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3">
                        <Button
                            size="lg"
                            fullWidth={true}
                            color="cyan"
                            onClick={onClickUrl(
                                "https://github.com/adenteo/NUSportsHub-final"
                            )}
                            className="font-montserrat normal-case dark:bg-blue-500"
                        >
                            View on Github
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto dark:bg-cyan-100">
                    <CardHeader
                        floated={false}
                        className="bg-transparent shadow-transparent"
                    >
                        <Image
                            src="/stock-monitor-new-2.png"
                            alt="stock-monitor"
                            width="300"
                            height="100"
                            className="mx-auto p-2"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="white"
                                className="font-montserrat font-semibold text-cyan-300 dark:text-blue-800"
                            >
                                Stock Monitor
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat font-medium text-sm dark:text-black"
                        >
                            An inventory scraper that obtains available sizes
                            for targeted products from major e-commerce sites
                            such as Footlocker and Shopify. Integrated with
                            Discord API.
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Python">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoPython size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="Discord API">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <BsDiscord size={20} />
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3">
                        <Button
                            size="lg"
                            fullWidth={true}
                            color="cyan"
                            onClick={onClickUrl(
                                "https://github.com/adenteo/footlockerMonitor"
                            )}
                            className="font-montserrat normal-case dark:bg-blue-500"
                        >
                            View on Github
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto dark:bg-cyan-100">
                    <CardHeader
                        floated={false}
                        className="bg-transparent shadow-transparent my-auto"
                    >
                        <Image
                            src="/laundry-bot-new-2.png"
                            alt="e-commerce-checkout-extension"
                            width={300}
                            height={200}
                            className="mx-auto p-2"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="white"
                                className="font-montserrat font-semibold text-cyan-300  dark:text-blue-800"
                            >
                                Laundry Bot
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat font-medium text-sm dark:text-black"
                        >
                            A Telegram laundry bot to update hostel residents on
                            real-time statuses of appliances in common laundry
                            room.
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="C++">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <TbBrandCpp size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="ESP32">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoHardwareChipOutline size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="MC-32 Door Sensor">
                                <span className="cursor-pointer rounded-full border dark:border-blue-300/25 border-blue-500/5 bg-blue-500/5 p-3 text-blue-600 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <MdOutlineSensorDoor size={20} />
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3">
                        <Button
                            size="lg"
                            fullWidth={true}
                            color="cyan"
                            onClick={onClickUrl(
                                "https://github.com/GaruLaundry"
                            )}
                            className="font-montserrat normal-case dark:bg-blue-500"
                        >
                            View on Github
                        </Button>
                    </CardFooter>
                </Card>
            </section>
            <section>
                <Typography
                    id="experience"
                    variant="h2"
                    color="white"
                    className="font-montserrat font-normal text-center my-5 dark:text-black"
                >
                    Work Experience
                </Typography>
                <ExperienceCard title="Software Engineer Intern" company="Undercurrent Capital Pte. Ltd. (Algo Foundry)" startDate="May 2023" endDate="August 2023" description={experienceDescription__1}></ExperienceCard>
                <ExperienceCard title="Freelance Software Developer" company="Fiverr" startDate="April 2021" endDate="June 2021" description={experienceDescription__2}></ExperienceCard>        
            </section>
            <section>
                <Typography
                    id="external_activities"
                    variant="h2"
                    color="white"
                    className="font-montserrat font-normal text-center my-5 dark:text-black"
                >
                    Extracurricular activities
                </Typography>
                <ExtraExperienceCard title="DSTA BrainHack 2023 CODE_EXP" award="Best Minimum Viable Prototype Award (Champions)" description={["Built a React Native mobile application that aims to enhance work experience by creating a more inclusive and enjoyable work experience."]}></ExtraExperienceCard>
                <ExtraExperienceCard title="NUS LifeHack 2023" award="Finalists (Top 15)" description={["Built a web application that aims to promote workplace efficiency and increase work fulfillment."]}></ExtraExperienceCard>        
            </section>
            <CustomFooter></CustomFooter>
        </main>
    );
}


