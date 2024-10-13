import React, { useState, useEffect } from "react";

const ProfileForm = ({ profile, onSave, onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setDescription(profile.description);
      setCity(profile.location.city);
      setLat(profile.location.lat);
      setLng(profile.location.lng);
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      id: profile ? profile.id : Date.now(), // Use existing ID if editing
      name,
      description,
      location: {
        city,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
    };
    onSave(newProfile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {profile ? "Edit Profile" : "Create New Profile"}
      </h2>
      
      {/* Name Input */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Description Input */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">Description</label>
        <input
          type="text"
          placeholder="Enter description"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      {/* City Input */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">City</label>
        <input
          type="text"
          placeholder="Enter city"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>

      {/* Latitude Input */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">Latitude</label>
        <input
          type="number"
          placeholder="Enter latitude"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
      </div>

      {/* Longitude Input */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">Longitude</label>
        <input
          type="number"
          placeholder="Enter longitude"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          required
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200">
          {profile ? "Update Profile" : "Add Profile"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 py-2 px-4 rounded-lg shadow hover:bg-gray-400 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
