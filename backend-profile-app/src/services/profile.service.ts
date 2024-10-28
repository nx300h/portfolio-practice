import ProfileRepository from "../repositories/profile.repository";

class ProfileService {
  public async createProfile(profileData: any) {
    return ProfileRepository.createProfile(profileData);
  }

  public async getProfiles() {
    return ProfileRepository.getProfiles(); // Ensure this method exists in your repository
  }

  public async getProfileById(id: number) {
    return ProfileRepository.getProfileById(id);
  }

  public async updateProfile(id: number, profileData: any) {
    const affectedRows = await ProfileRepository.updateProfile(id, profileData);
    return affectedRows; // Return the affected rows count
  }

  public async deleteProfile(id: number) {
    return ProfileRepository.deleteProfile(id);
  }
}

export default new ProfileService();
