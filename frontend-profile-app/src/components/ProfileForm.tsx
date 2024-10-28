import React, { useState } from "react";
import { useCreateProfile } from "../hooks/useProfile";
import { Profile } from "../features/profile/profileTypes";

const ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<Profile>>({});
  const { mutate: createProfile } = useCreateProfile();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Use type assertion to ensure TypeScript knows the type of e.target
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevState) => ({
        ...prevState,
        [name]: target.checked,
      }));
    } else if (name === "skills" || name === "languages") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.split(",").map((item) => item.trim()), // Convert to array of strings
      }));
    } else if (name === "dateOfBirth") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: new Date(value), // Convert string date to Date object
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProfile(formData);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          name="name"
          type="text"
          value={formData.name || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Bio</label>
        <textarea
          name="bio"
          value={formData.bio || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <input
          name="location"
          type="text"
          value={formData.location || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Nationality
        </label>
        <input
          name="nationality"
          type="text"
          value={formData.nationality || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Availability
        </label>
        <input
          name="availability"
          type="checkbox"
          checked={formData.availability || false}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Available</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Date of Birth
        </label>
        <input
          name="dateOfBirth"
          type="date"
          value={
            formData.dateOfBirth
              ? formData.dateOfBirth.toISOString().split("T")[0]
              : ""
          }
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phone</label>
        <input
          name="phone"
          type="tel"
          value={formData.phone || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Address</label>
        <textarea
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">GitHub</label>
        <input
          name="github"
          type="url"
          value={formData.github || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Twitter</label>
        <input
          name="twitter"
          type="url"
          value={formData.twitter || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">LinkedIn</label>
        <input
          name="linkedin"
          type="url"
          value={formData.linkedin || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Expected Salary
        </label>
        <input
          name="expectedSalary"
          type="number"
          value={formData.expectedSalary || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Own a Car</label>
        <input
          name="ownACar"
          type="checkbox"
          checked={formData.ownACar || false}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Yes</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Have Driving License
        </label>
        <input
          name="haveDrivingLicense"
          type="checkbox"
          checked={formData.haveDrivingLicense || false}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Yes</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Notice Period (weeks)
        </label>
        <input
          name="noticePeriod"
          type="number"
          value={formData.noticePeriod || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Immigration Status
        </label>
        <input
          name="immigrationStatus"
          type="text"
          value={formData.immigrationStatus || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Referees</label>
        <textarea
          name="referees"
          value={formData.referees || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Willing to Relocate
        </label>
        <input
          name="willingToRelocate"
          type="checkbox"
          checked={formData.willingToRelocate || false}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Yes</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Languages (comma separated)
        </label>
        <input
          name="languages"
          type="text"
          value={formData.languages ? formData.languages.join(", ") : ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Skills (comma separated)
        </label>
        <input
          name="skills"
          type="text"
          value={formData.skills ? formData.skills.join(", ") : ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Save Profile
      </button>
    </form>
  );
};

export default ProfileForm;