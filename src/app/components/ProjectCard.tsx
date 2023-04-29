"use client";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
} from "@material-tailwind/react";

export default function ProjectCard({ title: String }) {
    return (
        <Card className="max-w-[26rem] shadow-lg bg-dark-gray-lighter mx-auto">
            <CardHeader floated={false} color="white">
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Typography
                        variant="h5"
                        color="white"
                        className="font-medium"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        color="white"
                        className="flex items-center gap-1.5 font-normal"
                    >
                        5.0
                    </Typography>
                </div>
                <Typography color="white">
                    Enter a freshly updated and thoughtfully furnished peaceful
                    home surrounded by ancient trees, stone walls, and open
                    meadows.
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    <Tooltip content="$129 per night">
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"></span>
                    </Tooltip>
                    <Tooltip content="Free wifi">
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"></span>
                    </Tooltip>
                    <Tooltip content="2 bedrooms">
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"></span>
                    </Tooltip>
                    <Tooltip content={`65" HDTV`}>
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"></span>
                    </Tooltip>
                    <Tooltip content="Fire alert">
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"></span>
                    </Tooltip>
                    <Tooltip content="And +20 more">
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                            +20
                        </span>
                    </Tooltip>
                </div>
            </CardBody>
            <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                    Reserve
                </Button>
            </CardFooter>
        </Card>
    );
}
