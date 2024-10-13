import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import LeafletMap from "./LeafletMap";

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.location.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 overflow-hidden">
      {/* Search Input */}
      <div className="md:w-1/3 w-full p-6 bg-white shadow-lg overflow-y-auto">
        <input
          type="text"
          placeholder="Search profiles or locations..."
          className="border border-gray-300 p-3 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-6">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="transition-transform transform hover:scale-105"
            >
              {/* Profile Card */}
              <ProfileCard
                profile={profile}
                onSummaryClick={handleSummaryClick}
                onClick={() => setSelectedProfile(profile)} // Set selected profile
              />
              {/* Conditionally render map below the profile card on mobile screens */}
              {selectedProfile && selectedProfile.id === profile.id && (
                <div className="mt-4 w-full flex justify-center">
                  <div className="w-full md:hidden h-48 rounded-lg overflow-hidden shadow-md">
                    <LeafletMap
                      latitude={selectedProfile.location.lat}
                      longitude={selectedProfile.location.lng}
                      profileName={selectedProfile.name}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Map Section for larger screens */}
      <div className="hidden md:flex md:w-2/3 h-full p-6 bg-white shadow-lg flex-col justify-center items-center">
        {selectedProfile ? (
          <div className="rounded-lg overflow-hidden shadow-md h-full w-full">
            <LeafletMap
              latitude={selectedProfile.location.lat}
              longitude={selectedProfile.location.lng}
              profileName={selectedProfile.name}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v5l-7-7 7-7v5h11v4H9z"
              />
            </svg>
            <p>Select a profile to view the map.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileList;
