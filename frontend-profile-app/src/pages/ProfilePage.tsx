import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axiosInstance from "../axiosInstance";

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useQuery(
    ["profiles", id],
    () => axiosInstance.get(`/api/profiles/${id}`).then((res) => res.data),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="profile-details">
      <h1>{data?.name}</h1>
      <p>{data?.bio}</p>
      {data?.location && (
        <p>
          <strong>Location:</strong> {data.location}
        </p>
      )}
      {data?.nationality && (
        <p>
          <strong>Nationality:</strong> {data.nationality}
        </p>
      )}
      {data?.availability !== undefined && (
        <p>
          <strong>Available:</strong> {data.availability ? "Yes" : "No"}
        </p>
      )}
      {data?.dateOfBirth && (
        <p>
          <strong>Date of Birth:</strong>{" "}
          {new Date(data.dateOfBirth).toLocaleDateString()}
        </p>
      )}
      {data?.email && (
        <p>
          <strong>Email:</strong> {data.email}
        </p>
      )}
      {data?.phone && (
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
      )}
      {data?.address && (
        <p>
          <strong>Address:</strong> {data.address}
        </p>
      )}
      {data?.github && (
        <p>
          <strong>GitHub:</strong> <a href={data.github}>{data.github}</a>
        </p>
      )}
      {data?.twitter && (
        <p>
          <strong>Twitter:</strong> <a href={data.twitter}>{data.twitter}</a>
        </p>
      )}
      {data?.linkedin && (
        <p>
          <strong>LinkedIn:</strong> <a href={data.linkedin}>{data.linkedin}</a>
        </p>
      )}
      {data?.expectedSalary && (
        <p>
          <strong>Expected Salary:</strong> ${data.expectedSalary}
        </p>
      )}
      {data?.ownACar !== undefined && (
        <p>
          <strong>Owns a Car:</strong> {data.ownACar ? "Yes" : "No"}
        </p>
      )}
      {data?.haveDrivingLicense !== undefined && (
        <p>
          <strong>Has Driving License:</strong>{" "}
          {data.haveDrivingLicense ? "Yes" : "No"}
        </p>
      )}
      {data?.noticePeriod && (
        <p>
          <strong>Notice Period:</strong> {data.noticePeriod} days
        </p>
      )}
      {data?.immigrationStatus && (
        <p>
          <strong>Immigration Status:</strong> {data.immigrationStatus}
        </p>
      )}
      {data?.referees && (
        <p>
          <strong>Referees:</strong> {data.referees}
        </p>
      )}
      {data?.willingToRelocate !== undefined && (
        <p>
          <strong>Willing to Relocate:</strong>{" "}
          {data.willingToRelocate ? "Yes" : "No"}
        </p>
      )}
      {data?.languages && data.languages.length > 0 && (
        <p>
          <strong>Languages:</strong> {data.languages.join(", ")}
        </p>
      )}
      {data?.skills && data.skills.length > 0 && (
        <p>
          <strong>Skills:</strong> {data.skills.join(", ")}
        </p>
      )}
      {data?.createdAt && (
        <p>
          <strong>Profile Created:</strong>{" "}
          {new Date(data.createdAt).toLocaleDateString()}
        </p>
      )}
      {data?.updatedAt && (
        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(data.updatedAt).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default ProfilePage;
