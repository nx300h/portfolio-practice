// src/services/profileService.ts
import { Profile } from "../features/profile/profileTypes";
import { createProfile as apiCreateProfile } from "../api/profileApi";

export const addProfile = async (
  profile: Partial<Profile>
): Promise<Profile> => {
  return await apiCreateProfile(profile);
};
