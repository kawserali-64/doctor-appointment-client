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

    const [appointmentDate, setAppointmentDate] = useState(currentDate || "");
    const [appointmentTime, setAppointmentTime] = useState(currentTime || "");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setAppointmentDate(currentDate || "");
        setAppointmentTime(currentTime || "");
    }, [currentDate, currentTime]);

    const handleUpdate = async () => {
        try {
            setLoading(true);

            const { data: tokenData } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${tokenData.token}`,
                    },
                    body: JSON.stringify({
                        appointmentDate,
                        appointmentTime,
                    }),
                }
            );

            const data = await res.json();

            console.log(data);

            if (data?.modifiedCount > 0 || data?.success) {
                toast.success("Booking updated successfully!");
            } else {
                toast.error("Update failed!");
            }

        } catch (err) {
            console.log(err);
            toast.error("Failed to update booking.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AlertDialog>

            <AlertDialog.Trigger>
                <button className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600">
                    Update
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>

                    <AlertDialog.Dialog className="sm:max-w-[400px] bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xl border dark:border-zinc-800">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Heading className="dark:text-white">
                                Update Booking
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>

                            <div className="mb-3">
                                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                                    Appointment Date
                                </label>

                                <input
                                    type="date"
                                    value={appointmentDate || ""}
                                    onChange={(e) =>
                                        setAppointmentDate(e.target.value)
                                    }
                                    className="border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white p-2 w-full rounded focus:ring-2 focus:ring-cyan-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                                    Appointment Time
                                </label>

                                <input
                                    type="time"
                                    value={appointmentTime || ""}
                                    onChange={(e) =>
                                        setAppointmentTime(e.target.value)
                                    }
                                    className="border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white p-2 w-full rounded focus:ring-2 focus:ring-cyan-500 outline-none"
                                />
                            </div>

                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="tertiary"
                                className="dark:text-white"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                color="primary"
                                onClick={handleUpdate}
                                isDisabled={loading}
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>
            </AlertDialog.Backdrop>

        </AlertDialog>
    );
}