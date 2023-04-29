"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import { AiFillHtml5, AiFillChrome } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { IoHardwareChipOutline } from "react-icons/io5";
import { MdOutlineSensorDoor } from "react-icons/md";
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

export default function Home() {
    const openNewTab = (url: string): void => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    const onClickUrl =
        (url: string): (() => void) =>
        () =>
            openNewTab(url);
    return (
        <main>
            <Navbar />
            <section
                id="home"
                className="text-center text-sm text-white font-montserrat font-medium h-[90vh] flex flex-col"
            >
                <div className="my-auto px-8">
                    <h1 className="font-inter font-semibold text-4xl text-cyan-300 lg:text-5xl">
                        Aden Teo
                    </h1>
                    <Image
                        src="/profile-pic-round.png"
                        alt="Aden Teo"
                        width={150}
                        height={150}
                        className="mx-auto my-5"
                    ></Image>
                    <h2 className="font-montserrat font-normal text-base lg:text-2xl">
                        Computer Engineering Undergraduate
                    </h2>
                    <h3 className="font-montserrat font-normal text-xs lg:text-xl">
                        National University of Singapore
                    </h3>
                    <div></div>
                    <p className="font-montserrat font-normal text-sm my-5 max-w-2xl mx-auto lg:text-base">
                        An aspiring Computer Engineer with a strong interest in
                        leveraging{" "}
                        <span className="text-cyan-300">blockchain</span> and{" "}
                        <span className="text-cyan-300">AI</span> technologies
                        to improve lives. Feel free to connect with me!
                    </p>
                    <div className="flex justify-center">
                        <a href="https://github.com/adenteo" target="_blank">
                            <BsGithub
                                size={30}
                                className="cursor-pointer hover:text-cyan-300 mx-5"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aden-teo/"
                            target="_blank"
                        >
                            <BsLinkedin
                                size={30}
                                className="cursor-pointer hover:text-cyan-300 mx-5"
                            />
                        </a>
                    </div>
                </div>
            </section>
            <Typography
                variant="h2"
                color="white"
                className="font-montserrat font-thin text-center my-5"
                id="projects"
            >
                Projects
            </Typography>
            <section className="p-8 grid lg:grid-cols-2 gap-y-10">
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto">
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
                                className="font-montserrat font-semibold text-cyan-300"
                            >
                                E-commerce Checkout Extension
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat text-sm"
                        >
                            A custom Google Chrome extension designed to
                            automate purchasing processes on major e-commerce
                            websites, such as Shopify, Adidas and Nike, reducing
                            checkout duration by up to{" "}
                            <span className="text-cyan-300">80%.</span>
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="HTML">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <AiFillHtml5 size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="CSS">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoCss3 size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="JavaScript">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoJavascript size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="Chrome Extension API">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
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
                        >
                            View on Github
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto">
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
                                className="font-montserrat font-semibold text-cyan-300"
                            >
                                NUSports Hub
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat text-sm"
                        >
                            An all-in-one mobile application built for NUS
                            students{"'"} sporting needs.
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="React Native">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <FaReact size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="JavaScript">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoJavascript size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="Supabase">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
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
                        >
                            View on Github
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto">
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
                                className="font-montserrat font-semibold text-cyan-300"
                            >
                                Stock Monitor
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat text-sm"
                        >
                            An inventory scraper that obtains available sizes
                            for targeted products from major e-commerce sites
                            such as Footlocker and Shopify. Integrated with
                            Discord API.
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Python">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoLogoPython size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="Discord API">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
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
                        >
                            View on Github
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto">
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
                                className="font-montserrat font-semibold text-cyan-300"
                            >
                                Laundry Bot
                            </Typography>
                        </div>
                        <Typography
                            color="white"
                            className="font-montserrat text-sm"
                        >
                            A Telegram laundry bot to update hostel residents on
                            real-time statuses of appliances in common laundry
                            room.
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="C++">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <TbBrandCpp size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="ESP32">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <IoHardwareChipOutline size={20} />
                                </span>
                            </Tooltip>
                            <Tooltip content="MC-32 Door Sensor">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
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
                    className="font-montserrat font-thin text-center my-5"
                >
                    Experience
                </Typography>
                <div className="bg-dark-gray-lighter w-4/5 mx-auto rounded-md shadow-md p-5 my-10 max-w-[26rem]">
                    <Typography
                        variant="h4"
                        color="white"
                        className="font-montserrat font-semibold text-center my-3 text-cyan-300"
                    >
                        Software Engineer Intern
                    </Typography>
                    <Typography
                        color="white"
                        className="font-montserrat font-normal text-center"
                    >
                        Algo Foundry
                    </Typography>
                    <Typography
                        color="white"
                        className="font-montserrat text-center text-xs"
                    >
                        2023 May - 2023 August
                    </Typography>
                    <Typography
                        color="white"
                        className="font-montserrat text-center my-5 text-sm block"
                    >
                        - To be updated
                    </Typography>
                </div>
                <div className="bg-dark-gray-lighter w-4/5 mx-auto rounded-md shadow-md p-5 my-10 max-w-[26rem]">
                    <Typography
                        variant="h4"
                        color="white"
                        className="font-montserrat font-semibold text-center my-3 text-cyan-300"
                    >
                        Freelance Software Developer
                    </Typography>
                    <Typography
                        color="white"
                        className="font-montserrat text-center"
                    >
                        Fiverr
                    </Typography>
                    <Typography
                        color="white"
                        className="font-montserrat text-center text-xs"
                    >
                        2021 April - 2021 June
                    </Typography>
                    <Typography
                        color="white"
                        className="font-montserrat text-center my-5 text-sm block px-5"
                    >
                        - Delivered 5+ small to medium-scale projects within a
                        month.
                    </Typography>
                    <Typography
                        color="white"
                        className="font-montserrat text-center my-5 text-sm block px-5"
                    >
                        - Developed Google Chrome extensions and Python
                        automation scripts to enable continuous monitoring of
                        E-commerce websites and automatic checkouts.
                    </Typography>
                </div>
            </section>
        </main>
    );
}
