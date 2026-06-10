import profileLogo from "../assets/profilelogo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Profile = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


const [name, setName] = useState(user?.name || "");
const [email, setEmail] = useState(user?.email || "");

const handleUpdate = () => {
  const updatedUser = {
    ...user,
    name,
    email,
  };

  localStorage.setItem(
    "user",
    JSON.stringify(updatedUser)
  );

  alert("Profile Updated Successfully!");
};

  return (
    <section className="min-h-screen bg-gray-100 py-20">

      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-8 text-center">
          My Profile
        </h1>
        <div className="flex justify-center mb-6">
  <img
    src={profileLogo}
    alt="Profile"
    className="w-32 h-32 rounded-full border-4 border-pink-500 object-cover"
  />
</div>

        <div className="space-y-4">

          <div>
            <h3 className="font-semibold">Name</h3>
            <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border p-3 rounded-lg"
/>
          </div>

          <div>
            <h3 className="font-semibold">Email</h3>
            <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border p-3 rounded-lg"
/>
          </div>

          <button
  onClick={handleUpdate}
  className="w-full bg-pink-600 text-white py-3 rounded-lg mt-5"
>
  Save Changes
</button>

        </div>
        <Link
  to="/orders"
  className="inline-block mt-5 bg-pink-600 text-white px-5 py-2 rounded-lg"
>
  My Orders
</Link>

      </div>

    </section>
  );
};

export default Profile;