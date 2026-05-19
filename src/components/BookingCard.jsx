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

    // states
    const [patientName, setPatientName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const handleBooking = async () => {
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
        
        const {data:tokenData,} =await authClient.token();

        const res = await fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json",authorization: `Bearer ${tokenData?.token}` },
            body: JSON.stringify(bookingData),
        });
        const data = await res.json();
        toast.success("Appointment booked successfully!");
        

        setOpen(false);
    };

    return (
        <div>

            {/* BOOK NOW BUTTON */}
            <Button
                onPress={() => setOpen(true)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl px-8 py-4 text-base font-semibold shadow-xl"
            >
                <CalendarDays size={18} />
                Book Now
            </Button>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl relative space-y-4">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3"
                        >
                            <X />
                        </button>

                        <h2 className="text-xl font-bold text-center">
                            Book Appointment
                        </h2>

                        {/* PATIENT NAME */}
                        <input
                            type="text"
                            placeholder="Patient Name"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="border p-2 rounded w-full"
                        />

                        {/* GENDER */}
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="border p-2 rounded w-full"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        {/* PHONE */}
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border p-2 rounded w-full"
                        />

                        {/* TIME */}
                        <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="border p-2 rounded w-full"
                        >
                            <option value="">Select Time</option>
                            <option value="09:00 AM">09:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="04:00 PM">04:00 PM</option>
                        </select>

                        {/* DATE */}
                        <DateField
                            label="Appointment Date"
                            value={value}
                            onChange={setValue}
                            className="w-full"
                        >
                            <Label>Select Date</Label>

                            <DateField.Group className="border rounded-xl px-3 py-2 flex items-center gap-2">

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

                        {/* SUBMIT */}
                        <Button
                            onPress={handleBooking}
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl py-3 font-semibold"
                        >
                            Confirm Booking
                        </Button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingCardPage;