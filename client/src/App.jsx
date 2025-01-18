import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route
                        path="/dashboard"
                        element={<UserDashboard />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
