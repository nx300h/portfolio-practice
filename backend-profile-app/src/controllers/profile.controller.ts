import { Request, Response } from "express";
import ProfileService from "../services/profile.service";

class ProfileController {
  public async createProfile(req: Request, res: Response): Promise<void> {
    try {
      const profile = await ProfileService.createProfile(req.body);
      res.status(201).json(profile);
    } catch (error) {
      res.status(500).json({ message: "Error creating profile", error });
    }
  }

  public async getProfiles(req: Request, res: Response): Promise<void> {
    try {
      const profiles = await ProfileService.getProfiles(); // Ensure this method exists in your service
      res.status(200).json(profiles);
    } catch (error) {
      res.status(500).json({ message: "Error fetching profiles", error });
    }
  }

  public async getProfileById(req: Request, res: Response): Promise<void> {
    try {
      const profile = await ProfileService.getProfileById(
        Number(req.params.id)
      );
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(404).json({ message: "Profile not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching profile by id", error });
    }
  }

  public async updateProfile(req: Request, res: Response): Promise<void> {
    try {
      const updatedProfile = await ProfileService.updateProfile(
        Number(req.params.id),
        req.body
      );
      if (updatedProfile) {
        res.status(200).json(updatedProfile);
      } else {
        res.status(404).json({ message: "Profile not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating profile", error });
    }
  }

  public async deleteProfile(req: Request, res: Response): Promise<void> {
    try {
      const deleted = await ProfileService.deleteProfile(Number(req.params.id));
      if (deleted) {
        res.status(204).json({ message: "Profile deleted" });
      } else {
        res.status(404).json({ message: "Profile not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting profile", error });
    }
  }
}

// Export an instance of the controller
export default new ProfileController();
