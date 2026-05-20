"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function BookingDelete({ bookingId, setBookings }) {

    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);

            const { data: tokenData } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${tokenData.token}`,
                    },
                }
            );

            const data = await res.json();
            console.log(data);

            if (res.ok) {
                toast.success("Booking deleted successfully!");

                setBookings((prev) =>
                    prev.filter((item) => item._id !== bookingId)
                );
            } else {
                toast.error("Delete failed!");
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AlertDialog>
            <AlertDialog.Trigger>
                <button className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600">
                    Delete
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xl">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete booking?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p className="text-gray-600 dark:text-gray-300">
                                This action will permanently delete this booking.
                                This cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                variant="danger"
                                onClick={handleDelete}
                                isDisabled={loading}
                            >
                                {loading ? "Deleting..." : "Delete"}
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}