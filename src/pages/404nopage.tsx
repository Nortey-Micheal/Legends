import { Link } from "react-router";

export default function NoPagaeFound() {
    return <div className="flex flex-col w-dvw h-dvh justify-center items-center">
        <p className="text-6xl">Error 404</p>
        <p className="text-2xl">Page Not Found</p>
        <Link to={'/'} className="text-purple-700 font-bold text-lg hover:underline">Return to Home</Link>
    </div>
}