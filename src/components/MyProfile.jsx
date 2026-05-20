"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();

  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
      setForm({
        name: session.user.name || "",
        image: session.user.image || "",
      });
    }
  }, [session]);

  const handleSave = async () => {
    try {
      const { error } = await authClient.updateUser({
        name: form.name,
        image: form.image,
      });

      if (error) return;

      setUser((prev) => ({
        ...prev,
        name: form.name,
        image: form.image,
      }));

      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user)
    return (
      <p className="text-center mt-10 text-gray-500 dark:text-gray-300">
        Loading...
      </p>
    );

  return (
    <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4 py-10 flex justify-center">

      <div className="w-full max-w-4xl">

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-zinc-800">

          <div className="h-44 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-500"></div>

          <div className="px-8 pb-10">

            <div className="-mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

              <div className="flex flex-col md:flex-row items-center gap-6">

                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl bg-gray-200">
                  <Image
                    src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="profile"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {user.name}
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300 mb-5">
                    {user.email}
                  </p>

                  <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 font-medium">
                    Active Member
                  </span>
                </div>

              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="px-5 py-2 bg-cyan-600 text-white rounded-xl shadow-md hover:bg-cyan-700 transition"
              >
                Edit Profile
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

              <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 dark:text-gray-300 text-sm">
                  Full Name
                </h3>
                <p className="text-lg font-semibold mt-1 text-gray-800 dark:text-white">
                  {user.name}
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 dark:text-gray-300 text-sm">
                  Email
                </h3>
                <p className="text-lg font-semibold mt-1 text-gray-800 dark:text-white break-all">
                  {user.email}
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 dark:text-gray-300 text-sm">
                  Status
                </h3>
                <p className="text-lg font-semibold mt-1 text-cyan-600 dark:text-cyan-400">
                  Verified
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 dark:border-zinc-800">

            <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
              Edit Profile
            </h2>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="border dark:border-zinc-700 p-3 w-full rounded-xl mb-4 outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-zinc-800 text-black dark:text-white"
              placeholder="Your Name"
            />

            <input
              type="text"
              value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.value })
              }
              className="border dark:border-zinc-700 p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-zinc-800 text-black dark:text-white"
              placeholder="Image URL"
            />

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl border dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-white"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-5 py-2 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700"
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default MyProfilePage;