"use client";
import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { BiHomeAlt2 } from "react-icons/bi";

export default function Example() {
    const [openNav, setOpenNav] = React.useState(false);
    const openNewTab = (url: string): void => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    const onClickUrl =
        (url: string): (() => void) =>
        () =>
            openNewTab(url);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-montserrat font-extrabold"
            >
                <a
                    href="#projects"
                    className="flex items-center hover:text-cyan-800"
                >
                    Projects
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-montserrat font-extrabold"
            >
                <a
                    href="#experience"
                    className="flex items-center hover:text-cyan-800"
                >
                    Experience
                </a>
            </Typography>
            <Button
                variant="gradient"
                className="font-montserrat font-extrabold normal-case"
                color="cyan"
                onClick={onClickUrl("https://www.linkedin.com/in/aden-teo/")}
            >
                Connect with me
            </Button>
        </ul>
    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-none">
                <div className="flex items-center justify-between text-white">
                    <a href="#">
                        <BiHomeAlt2 className="text-2xl cursor-pointer hover:text-cyan-800" />
                    </a>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6 hover:text-cyan-800"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 hover:text-cyan-800"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>{navList}</MobileNav>
            </Navbar>
        </>
    );
}
