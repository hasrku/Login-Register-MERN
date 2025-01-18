import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
const NotFound = () => {
    return (
        <>
            <div className="flex flex-col gap-5 text-4xl font-roboto w-[100vw] h-[100vh] bg-[#284167] justify-center items-center text-white">
                <BiError className="size-32 text-yellow-300" />
                <p className="">404 Page Not Found</p>
                <span className="text-3xl">
                    Return to{" "}
                    <Link to="/" className="text-[#746dfb]">
                        Home
                    </Link>
                </span>
            </div>
        </>
    );
};

export default NotFound;
