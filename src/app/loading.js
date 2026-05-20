const LoadingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4">

            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Loading, please wait...
            </p>

            <div className="mt-8 w-full max-w-md space-y-3">

                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-4/6"></div>

                <div className="h-20 bg-gray-200 dark:bg-zinc-800 rounded-xl animate-pulse mt-4"></div>

            </div>

        </div>
    );
};

export default LoadingPage;