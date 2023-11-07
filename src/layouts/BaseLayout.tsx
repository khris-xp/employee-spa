import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BaseLayout() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Outlet />
            </main>
        </div>
    )
}