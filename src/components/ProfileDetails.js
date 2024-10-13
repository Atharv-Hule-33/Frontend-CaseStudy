import React from "react";

const ProfileDetails = ({ profile, onClose }) => {
  if (!profile) return null; // Return null if no profile is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full mx-4">
        {/* Profile Picture */}
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        
        {/* Profile Information */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h2>
          <p className="text-gray-600 mb-4">{profile.description}</p>
          <p className="text-gray-500">
            Location: {profile.location.city}, {profile.location.country}
          </p>
        </div>

        {/* Close Button */}
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
