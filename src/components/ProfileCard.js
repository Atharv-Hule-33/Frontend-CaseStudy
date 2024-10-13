import React, { useState } from "react";

const ProfileCard = ({ profile, onSummaryClick }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage the expanded view

  const toggleDetails = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <div
      className="border p-6 rounded-lg mb-4 cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-white"
      onClick={toggleDetails}
    >
      {/* Profile Image and Name Row */}
      <div className="flex items-center">
        {/* Profile Image */}
        <img
          src={profile.image} // Assuming profile.image holds the image URL
          alt={`${profile.name}'s profile`}
          className="w-16 h-16 object-cover rounded-full mr-4 shadow-md border-2 border-gray-200"
        />

        {/* Profile Name */}
        <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
      </div>

      {/* Details with Expand/Collapse Animation */}
      <div
        className={`mt-4 overflow-hidden transition-max-height duration-300 ${
          isExpanded ? "max-h-full" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 font-medium mt-2">
          {profile.jobProfile} {/* Updated from description to jobProfile */}
        </p>
        <p className="text-gray-500">{profile.location.city}</p>
        <p className="text-gray-600 mt-2">{profile.description}</p> {/* Description field */}

        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the card click from firing
            onSummaryClick(profile); // Call the summary click handler
          }}
          className="mt-3 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          View Summary
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
