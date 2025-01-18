import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { LuNotebookPen } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
    return (
        <>
            <div className="flex w-[100vw] h-[100vh] bg-[#284167] justify-center items-center text-white">
                <h1 className="font-roboto absolute top-10 text-3xl">
                    Home Page
                </h1>
                <div className="flex justify-center gap-7 sm:justify-between flex-wrap w-[95%] sm:w-[60vw] lg:w-[40vw] px-2">
                    <Link
                        to="/login"
                        className="w-[10rem] h-[10rem] bg-[#6397ff] flex flex-col justify-center items-center rounded-xl shadow-xl"
                    >
                        <VscAccount className="size-12 sm:size-16" />
                        <p className="text-center">Login</p>
                    </Link>
                    <Link
                        to="/signup"
                        className="w-[10rem] h-[10rem] bg-[#6397ff] flex flex-col justify-center items-center rounded-xl shadow-xl"
                    >
                        <LuNotebookPen className="size-12 sm:size-16" />
                        <p>Sign Up</p>
                    </Link>
                </div>
                <div className=" absolute my-3 text-[#ffff] font-mono text-sm bottom-0 flex">
                    <a
                        href="https://github.com/hasrku"
                        target="_blank"
                        className=" flex"
                    >
                        <FaGithub fill="#ffff" size={20} />
                        <span className="font-serif">&nbsp;@</span>hasrku
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
