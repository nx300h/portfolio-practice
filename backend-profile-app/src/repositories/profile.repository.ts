import Profile from "../models/profile.model";

class ProfileRepository {
  public async createProfile(profileData: any) {
    return await Profile.create({
      ...profileData,
      languages: profileData.languages?.join(", "),
      skills: profileData.skills?.join(", "),
    });
  }

  public async getProfiles() {
    return Profile.findByPk();
  }

  public async getProfileById(id: number): Promise<Profile | null> {
    return Profile.findByPk(id);
  }

  public async updateProfile(
    id: number,
    profileData: Partial<Profile>
  ): Promise<number> {
    const [affectedCount] = await Profile.update(profileData, {
      where: { id },
    });
    return affectedCount; // Return the number of affected rows
  }

  public async deleteProfile(id: number): Promise<number> {
    return Profile.destroy({ where: { id } });
  }
}

export default new ProfileRepository();
