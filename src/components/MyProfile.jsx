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

      if (error) {
        console.log(error);
        return;
      }

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

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10 flex justify-center">
        <div className="w-full max-w-4xl">

        {/* PROFILE CARD */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* COVER */}
          <div className="h-44 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

          <div className="px-8 pb-10">

            {/* TOP SECTION */}
            <div className="-mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

              <div className="flex flex-col md:flex-row items-center gap-6">

                {/* IMAGE */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200">
                  <Image
                    src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* INFO */}
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-800">
                    {user.name}
                  </h1>

                  <p className="text-black mb-5">{user.email}</p>

                  <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
                    Active Member
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setIsOpen(true)}
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
              >
                Edit Profile
              </button>
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

              <div className="bg-gray-50 border rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 text-sm">Full Name</h3>
                <p className="text-lg font-semibold mt-1 text-gray-800">
                  {user.name}
                </p>
              </div>

              <div className="bg-gray-50 border rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 text-sm">Email</h3>
                <p className="text-lg font-semibold mt-1 text-gray-800 break-all">
                  {user.email}
                </p>
              </div>

              <div className="bg-gray-50 border rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 text-sm">Status</h3>
                <p className="text-lg font-semibold mt-1 text-green-600">
                  Verified
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-[420px] shadow-2xl">

            <h2 className="text-2xl font-bold mb-5 text-gray-800">
              Edit Profile
            </h2>

            {/* NAME */}
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="border p-3 w-full rounded-xl mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />

            {/* IMAGE */}
            <input
              type="text"
              value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.value })
              }
              className="border p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Image URL"
            />

            {/* BUTTONS */}
            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl border hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
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