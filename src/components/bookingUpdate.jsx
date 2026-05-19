"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function BookingUpdate({
    bookingId,
    currentDate,
    currentTime,
}) {

    // ✅ state
    const [appointmentDate, setAppointmentDate] =
        useState(currentDate || "");

    const [appointmentTime, setAppointmentTime] =
        useState(currentTime || "");

    // ✅ sync state when props change
    useEffect(() => {
        setAppointmentDate(currentDate || "");
        setAppointmentTime(currentTime || "");
    }, [currentDate, currentTime]);

    // ✅ UPDATE FUNCTION
    const handleUpdate = async () => {
        try {
            const { data: tokenData, } = await authClient.token();

            const res = await fetch(
                `http://localhost:5000/booking/${bookingId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${tokenData.token}`,
                    },
                    body: JSON.stringify({
                        appointmentDate,
                        appointmentTime,
                    }),
                }
            );

            const data = await res.json();

            console.log(data);

            if (data.modifiedCount > 0) {
                toast.success("Booking updated successfully!");
            }

        } catch (err) {
            console.log(err);
            toast.error("Failed to update booking.");
        }
    };

    return (
        <AlertDialog>

            {/* OPEN BUTTON */}
            <AlertDialog.Trigger>
                <button className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600">
                    Update
                </button>
            </AlertDialog.Trigger>

            {/* MODAL */}
            <AlertDialog.Backdrop>
                <AlertDialog.Container>

                    <AlertDialog.Dialog className="sm:max-w-[400px]">

                        <AlertDialog.CloseTrigger />

                        {/* HEADER */}
                        <AlertDialog.Header>
                            <AlertDialog.Heading>
                                Update Booking
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        {/* BODY */}
                        <AlertDialog.Body>

                            {/* DATE */}
                            <div className="mb-3">
                                <label className="block text-sm mb-1">
                                    Appointment Date
                                </label>

                                <input
                                    type="date"
                                    value={appointmentDate || ""}
                                    onChange={(e) =>
                                        setAppointmentDate(
                                            e.target.value
                                        )
                                    }
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                            {/* TIME */}
                            <div>
                                <label className="block text-sm mb-1">
                                    Appointment Time
                                </label>

                                <input
                                    type="time"
                                    value={appointmentTime || ""}
                                    onChange={(e) =>
                                        setAppointmentTime(
                                            e.target.value
                                        )
                                    }
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                        </AlertDialog.Body>

                        {/* FOOTER */}
                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                color="primary"
                                onClick={handleUpdate}
                            >
                                Save Changes
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>
            </AlertDialog.Backdrop>

        </AlertDialog>
    );
}