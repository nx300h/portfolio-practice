// src/components/ProfileCard.tsx
import React from "react";
import { Profile } from "../features/profile/profileTypes";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="p-4 border border-gray-200 rounded">
      <h3 className="text-lg font-bold">{profile.name}</h3>
      <p>{profile.bio}</p>
      <p>{profile.location}</p>
      <p>{profile.email}</p>
    </div>
  );
};

export default ProfileCard;
