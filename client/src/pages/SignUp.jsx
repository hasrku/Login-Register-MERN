import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FiHome } from "react-icons/fi";

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [classes, setClasses] = useState("hidden");
    const [message, setMessage] = useState("");

    function showMessage(status) {
        status === true
            ? setClasses("block text-green-500")
            : setClasses("block text-red-500");
        setTimeout(() => {
            setClasses("hidden");
        }, 2000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://login-register-mern-server.vercel.app/signup", { name, password, username })
            .then((result) => {
                if (result.data.status === "fail") {
                    showMessage(false);
                    console.log("username already exists");
                } else {
                    showMessage(true);
                    console.log("user created");
                }
                setMessage(result.data.message);
            })
            .catch((err) => {
                console.log(err);
                showMessage(false);
                setMessage("Server is offline. Please try again later.");
            });
    };

    return (
        <>
            <div className="flex relative w-[100vw] h-[100vh] bg-[#284167] justify-center items-center">
                <Link
                    to="/"
                    className="flex justify-center items-center absolute w-12 h-12 bg-[#4985fd] top-3 right-3 rounded-full"
                >
                    <FiHome className="size-8 text-white" />
                </Link>
                <div className="flex pt-24 flex-col relative justify-center items-center font-sans bg-[#002244] w-[95%] min-h-[60vh] sm:w-[30rem] text-white rounded-xl shadow-xl">
                    <h1 className="font-roboto absolute top-10 text-3xl">
                        Sign Up
                    </h1>
                    <p className="  w-[95%] sm:w-[80%]">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#746dfb]">
                            Login
                        </Link>
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex justify-center items-center flex-col gap-8 mt-10 w-full pb-9"
                    >
                        <input
                            className="w-[95%] sm:w-[80%] px-3 py-2 rounded text-xl bg-[#284167] focus:border-[#5b51ff]"
                            required
                            type="text"
                            placeholder="Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <div className="w-[100%] flex justify-center items-center relative">
                            <input
                                className="w-[95%] sm:w-[80%]  px-3 py-2 rounded text-xl bg-[#284167] focus:border-[#5b51ff]"
                                required
                                type={`${showPass ? "text" : "password"}`}
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <div
                                className="absolute top-2 right-4 sm:right-14 cursor-pointer"
                                onClick={() => {
                                    showPass === true
                                        ? setShowPass(false)
                                        : setShowPass(true);
                                }}
                            >
                                {showPass ? (
                                    <LuEye className="size-7" />
                                ) : (
                                    <LuEyeClosed className="size-7" />
                                )}
                            </div>
                        </div>
                        <input
                            className="w-[95%] sm:w-[80%] px-3 py-2 rounded text-xl bg-[#284167] focus:border-[#5b51ff]"
                            required
                            type="text"
                            placeholder="Username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        <div className={`absolute bottom-24  ${classes}`}>
                            <p>{message}</p>
                        </div>
                        <button
                            className={`w-[95%] sm:w-[80%] mt-6  py-2 text-center rounded-md bg-[#5b51ff]`}
                            type="submit"
                        >
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
