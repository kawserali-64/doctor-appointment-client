import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-zinc-950">

            <h1 className="text-6xl font-black text-gray-800 dark:text-white">
                404
            </h1>

            <p className="mt-4 text-xl font-semibold text-gray-600 dark:text-gray-300 text-center">
                Oops! Page not found
            </p>

            <p className="mt-2 text-sm text-gray-500 text-center max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link href="/">
                <button className="mt-6 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition">
                    Go Home
                </button>
            </Link>

        </div>
    );
};

export default NotFoundPage;