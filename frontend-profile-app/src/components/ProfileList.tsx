// src/components/ProfileList.tsx
import React from "react";
import { useProfiles } from "../hooks/useProfile"; // Use the updated hook
import ProfileCard from "./ProfileCard";

const ProfileList: React.FC = () => {
  const { data: profiles, isLoading, isError, error } = useProfiles();

  if (isLoading) return <div>Loading profiles...</div>;
  if (isError && error instanceof Error)
    return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {profiles?.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
