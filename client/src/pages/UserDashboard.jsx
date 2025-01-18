import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const [name, setName] = useState("User");
    const navigate = useNavigate();

    useEffect(() => {
        setName(localStorage.getItem("name"));
    });

    const handleLogout = () => {
        localStorage.removeItem("name");
        navigate("/login");
    };

    return (
        <>
            <div className="flex text-white relative w-[100vw] h-[100vh] bg-[#284167] justify-center items-center">
                <h1 className="text-center py-3 absolute top-0 w-full bg-[#1b2c3f] text-2xl font-roboto">
                    User Dashboard
                </h1>
                <div>
                    <h1 className="text-3xl sm:text-4xl">Hi, {name}</h1>
                    <p className="text-xl">
                        proceed to{" "}
                        <span
                            onClick={handleLogout}
                            className="cursor-pointer text-[#746dfb]"
                        >
                            Logout
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;
