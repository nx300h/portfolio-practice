import axios from "axios";
import axiosInstance from "../axiosInstance";
import { Profile } from "../features/profile/profileTypes";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // Your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all profiles
export const getProfiles = async (): Promise<Profile[]> => {
  const response = await axiosInstance.get("/");
  return response.data;
};

// Fetch a profile by ID
export const getProfileById = async (id: number) => {
  const response = await apiClient.get(`/profiles/${id}`);
  return response.data;
};

// Create a new profile
export const createProfile = async (
  profileData: Partial<Profile>
): Promise<Profile> => {
  const response = await axiosInstance.post("/profiles", profileData);
  return response.data;
};

// Update a profile by ID
export const updateProfile = async (id: number, profileData: unknown) => {
  const response = await apiClient.put(`/profiles/${id}`, profileData);
  return response.data;
};

// Delete a profile by ID
export const deleteProfile = async (id: number) => {
  const response = await apiClient.delete(`/profiles/${id}`);
  return response.data;
};
