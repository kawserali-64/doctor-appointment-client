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

    // FORM STATES
    const [patientName, setPatientName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    // LOADING
    const [loading, setLoading] = useState(false);

    // BOOKING HANDLER
    const handleBooking = async () => {

        // VALIDATION
        if (
            !patientName ||
            !gender ||
            !phone ||
            !selectedTime ||
            !value
        ) {
            toast.error("Please fill all fields!");
            return;
        }

        // PHONE VALIDATION
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

                // RESET FORM
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

            {/* BOOK BUTTON */}
            <Button
                onPress={() => setOpen(true)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl px-8 py-4 text-base font-semibold shadow-[0_10px_30px_rgba(14,116,144,0.25)]"
            >
                <CalendarDays size={18} />
                Book Now
            </Button>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">

                    <div className="bg-white w-full max-w-md rounded-3xl shadow-[0_20px_60px_rgba(14,116,144,0.25)] border border-gray-100 relative overflow-hidden">

                        {/* TOP HEADER */}
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

                            <p className="text-cyan-100 text-sm mt-1">
                                Fill all information carefully
                            </p>

                        </div>

                        {/* FORM */}
                        <div className="p-6 space-y-4">

                            {/* PATIENT NAME */}
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Patient Name
                                </label>

                                <input
                                    required
                                    type="text"
                                    placeholder="Enter patient name"
                                    value={patientName}
                                    onChange={(e) =>
                                        setPatientName(e.target.value)
                                    }
                                    className="
                                    w-full
                                    border border-gray-200
                                    rounded-xl
                                    px-4 py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                    "
                                />
                            </div>

                            {/* GENDER */}
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Gender
                                </label>

                                <select
                                    required
                                    value={gender}
                                    onChange={(e) =>
                                        setGender(e.target.value)
                                    }
                                    className="
                                    w-full
                                    border border-gray-200
                                    rounded-xl
                                    px-4 py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                    "
                                >
                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                </select>
                            </div>

                            {/* PHONE */}
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Phone Number
                                </label>

                                <input
                                    required
                                    type="number"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    className="
                                    w-full
                                    border border-gray-200
                                    rounded-xl
                                    px-4 py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                    "
                                />
                            </div>

                            {/* TIME */}
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Appointment Time
                                </label>

                                <select
                                    required
                                    value={selectedTime}
                                    onChange={(e) =>
                                        setSelectedTime(e.target.value)
                                    }
                                    className="
                                    w-full
                                    border border-gray-200
                                    rounded-xl
                                    px-4 py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                    "
                                >
                                    <option value="">
                                        Select Time
                                    </option>

                                    <option value="09:00 AM">
                                        09:00 AM
                                    </option>

                                    <option value="10:00 AM">
                                        10:00 AM
                                    </option>

                                    <option value="11:00 AM">
                                        11:00 AM
                                    </option>

                                    <option value="04:00 PM">
                                        04:00 PM
                                    </option>

                                </select>
                            </div>

                            {/* DATE */}
                            <div>

                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Appointment Date
                                </label>

                                <DateField
                                    value={value}
                                    onChange={setValue}
                                    className="w-full"
                                >
                                    <Label>Select Date</Label>

                                    <DateField.Group
                                        className="
                                        border border-gray-200
                                        rounded-xl
                                        px-4 py-3
                                        flex items-center gap-2
                                        focus-within:ring-2
                                        focus-within:ring-cyan-500
                                        transition-all
                                        "
                                    >

                                        <DateField.Prefix>
                                            <Calendar className="size-4 text-gray-500" />
                                        </DateField.Prefix>

                                        <DateField.Input>
                                            {(segment) => (
                                                <DateField.Segment
                                                    segment={segment}
                                                />
                                            )}
                                        </DateField.Input>

                                    </DateField.Group>

                                </DateField>
                            </div>

                            {/* SUBMIT */}
                            <Button
                                onPress={handleBooking}
                                isDisabled={loading}
                                className="
                                w-full
                                bg-cyan-600
                                hover:bg-cyan-700
                                text-white
                                rounded-xl
                                py-6
                                font-semibold
                                text-base
                                shadow-[0_10px_30px_rgba(14,116,144,0.25)]
                                "
                            >
                                {loading
                                    ? "Booking..."
                                    : "Confirm Booking"}
                            </Button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingCardPage;