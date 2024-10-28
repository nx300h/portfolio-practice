import { useQuery, useMutation, useQueryClient } from "react-query";
import axiosInstance from "../axiosInstance"; // Import the Axios instance
import { Profile } from "../features/profile/profileTypes";

// Hook to fetch all profiles
export const useProfiles = () => {
  return useQuery<Profile[], Error>("profiles", async () => {
    const response = await axiosInstance.get("/profiles"); // "/profiles" without "/api"
    return response.data;
  });
};

// Hook to fetch a single profile by ID
export const useProfile = (profileId: number) => {
  return useQuery<Profile, Error>(["profile", profileId], async () => {
    const response = await axiosInstance.get(`/profiles/${profileId}`); // "/profiles/:id" without "/api"
    return response.data;
  });
};

// Custom hook to create a new profile
export const useCreateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<Profile, Error, Partial<Profile>>(
    async (profileData) => {
      const response = await axiosInstance.post(
        "http://localhost:3000/api/profiles",
        profileData
      ); // "/profiles" without "/api"
      return response.data;
    },
    {
      onSuccess: () => {
        // Invalidate and refetch the profiles on successful creation
        queryClient.invalidateQueries("profiles");
      },
    }
  );
};
