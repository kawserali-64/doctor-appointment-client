import Image from "next/image";

const AppointmentFeatureSectionPage = () => {
    return (
        <section className="bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-10">

            <div className="max-w-7xl mx-auto space-y-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    <div>

                        <span className="text-cyan-600 font-semibold uppercase tracking-[3px] text-sm">
                            Modern Healthcare
                        </span>

                        <h1 className="mt-5 text-4xl sm:text-5xl font-black leading-tight text-gray-900 dark:text-white">
                            Better healthcare
                            for modern patients
                        </h1>

                        <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8 text-[15px]">
                            Our healthcare platform helps patients
                            easily explore doctors, manage appointments
                            and enjoy a smooth digital medical experience.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl px-6 py-5">
                                <h3 className="text-3xl font-black text-cyan-600">
                                    15K+
                                </h3>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Happy Patients
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl px-6 py-5">
                                <h3 className="text-3xl font-black text-cyan-600">
                                    120+
                                </h3>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Expert Doctors
                                </p>
                            </div>

                        </div>

                    </div>

                    <div>

                        <div className="relative h-[500px] rounded-[30px] overflow-hidden">

                            <Image
                                src="/helth1.jpg"
                                alt="healthcare"
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    <div>

                        <div className="relative h-[500px] rounded-[30px] overflow-hidden">

                            <Image
                                src="/helth2.jpg"
                                alt="healthcare"
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                    <div>

                        <span className="text-cyan-600 font-semibold uppercase tracking-[3px] text-sm">
                            Why Choose Us
                        </span>

                        <h2 className="mt-5 text-4xl sm:text-5xl font-black leading-tight text-gray-900 dark:text-white">
                            Simple, trusted &
                            modern healthcare
                        </h2>

                        <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8 text-[15px]">
                            We focus on creating a clean and smooth
                            healthcare experience with trusted doctors,
                            smart scheduling and patient-friendly services.
                        </p>

                        <div className="mt-10 space-y-4">

                            {[
                                "Trusted healthcare professionals",
                                "Easy appointment management",
                                "Modern digital healthcare system",
                                "Friendly patient support",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >

                                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-600" />

                                    <p className="text-gray-700 dark:text-gray-300">
                                        {item}
                                    </p>

                                </div>
                            ))}

                        </div>

                        <button
                            className="
                            mt-10
                            px-7
                            py-3
                            rounded-full
                            bg-cyan-600
                            hover:bg-cyan-700
                            text-white
                            font-medium
                            transition-all
                            duration-300
                            "
                        >
                            Learn More
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AppointmentFeatureSectionPage;