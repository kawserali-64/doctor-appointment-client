"use client";

import { useState } from "react";
import { Calendar, CalendarDays, X } from "lucide-react";
import { Button, DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingCardPage = ({ doctor }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [patientName, setPatientName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const [loading, setLoading] = useState(false);

    const handleBooking = async () => {
        if (!patientName || !gender || !phone || !selectedTime || !value) {
            toast.error("Please fill all fields!");
            return;
        }

        if (phone.length < 11) {
            toast.error("Please enter a valid phone number!");
            return;
        }

        const bookingData = {
            userEmail: user?.email,
            doctorName: doctor?.name,
            doctorImage: doctor?.image,
            doctorId: doctor?._id,
            patientName,
            gender,
            phone,
            appointmentDate: value?.toString(),
            appointmentTime: selectedTime,
        };

        try {
            setLoading(true);

            const { data: tokenData } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`,
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            const data = await res.json();

            if (data?.insertedId || data?.success) {
                toast.success("Appointment booked successfully!");

                setPatientName("");
                setGender("");
                setPhone("");
                setSelectedTime("");
                setValue(null);
                setOpen(false);
            } else {
                toast.error("Booking failed!");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <Button
                onPress={() => setOpen(true)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl px-8 py-4 text-base font-semibold shadow-[0_10px_30px_rgba(14,116,144,0.25)]"
            >
                <CalendarDays size={18} />
                Book Now
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">

                    <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-3xl shadow-[0_20px_60px_rgba(14,116,144,0.25)] border border-gray-100 dark:border-zinc-800 relative overflow-hidden">

                        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-5">

                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-white hover:scale-110 transition"
                            >
                                <X size={22} />
                            </button>

                            <h2 className="text-2xl font-bold text-white">
                                Book Appointment
                            </h2>

                            <p className="text-cyan-100 dark:text-gray-300 text-sm mt-1">
                                Fill all information carefully
                            </p>

                        </div>

                        <div className="p-6 space-y-4">

                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">
                                    Patient Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter patient name"
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                    className="w-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">
                                    Gender
                                </label>

                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">
                                    Phone Number
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">
                                    Appointment Time
                                </label>

                                <select
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    className="w-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                >
                                    <option value="">Select Time</option>
                                    <option value="09:00 AM">09:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="04:00 PM">04:00 PM</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">
                                    Appointment Date
                                </label>

                                <DateField value={value} onChange={setValue} className="w-full">

                                    <Label>Select Date</Label>

                                    <DateField.Group className="border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-xl px-4 py-3 flex items-center gap-2 focus-within:ring-2 focus-within:ring-cyan-500 transition-all text-black dark:text-white">

                                        <DateField.Prefix>
                                            <Calendar className="size-4 text-gray-500" />
                                        </DateField.Prefix>

                                        <DateField.Input>
                                            {(segment) => (
                                                <DateField.Segment segment={segment} />
                                            )}
                                        </DateField.Input>

                                    </DateField.Group>

                                </DateField>
                            </div>

                            <Button
                                onPress={handleBooking}
                                isDisabled={loading}
                                className="w-full bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white rounded-xl py-6 font-semibold text-base shadow-[0_10px_30px_rgba(14,116,144,0.25)]"
                            >
                                {loading ? "Booking..." : "Confirm Booking"}
                            </Button>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default BookingCardPage;