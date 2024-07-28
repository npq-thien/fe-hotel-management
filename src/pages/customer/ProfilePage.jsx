import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

import { CustomerLayout } from "components/layout";
import { useGetCurrentUser, useUpdateCurrentUser } from "api/customer/userApi";
import Notification from "components/common/Notification";
import { NOTIFICATION_TYPES } from "constants/type";

const ProfilePage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isEditable, setIsEditable] = useState(false);
  const [notification, setNotification] = useState(null);

  const { data: profileData } = useGetCurrentUser();

  useEffect(() => {
    if (profileData) {
      reset(profileData);
    }
  }, [profileData, reset]);

  const { mutate: updateProfile, isLoading: isUpdatingProfile } = useMutation({
    mutationFn: useUpdateCurrentUser,
    onSuccess: () => {
      setIsEditable(false);
      setNotification("Profile updated successfully!");
    },
  });

  const onSubmit = (data) => {
    updateProfile(data);
  };

  return (
    <CustomerLayout>
      {notification && <Notification message={notification} onClose={() => setNotification(null)} type={NOTIFICATION_TYPES.SUCCESS} />}
      <div className="bg-white rounded-lg border border-primary-1 flex-col flex mx-auto p-8 m-4 gap-5 w-full max-w-md">
        <div className="flex-between">
          <h3 className="text-primary h3-semibold">User information</h3>
          <button className="btn-primary px-4 bg-blue-400" onClick={() => setIsEditable(true)}>
            Edit
          </button>
        </div>

        <form className="flex-col flex gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label className="text-dark-4 font-semibold">Username</label>
            <input
              className="p-2 border rounded-lg min-h-10"
              {...register("username")}
              defaultValue={profileData?.username}
              disabled={!isEditable}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-dark-4 font-semibold">Full name</label>
            <input
              className="p-2 border rounded-lg min-h-10"
              {...register("fullName")}
              defaultValue={profileData?.fullName}
              disabled={!isEditable}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-dark-4 font-semibold">Email</label>
            <input
              className="p-2 border rounded-lg min-h-10"
              {...register("email")}
              defaultValue={profileData?.email}
              disabled={!isEditable}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-dark-4 font-semibold">
              Phone
            </label>
            <input
              className="p-2 border rounded-lg min-h-10"
              {...register("phone")}
              defaultValue={profileData?.phone || ""}
              disabled={!isEditable}
            />
          </div>

          <div className="flex gap-4 ml-auto mt-4">
            <button
              className={isEditable ? "btn-secondary" : "btn-disabled"}
              onClick={() => setIsEditable(false)}
              disabled={!isEditable}
            >
              Cancel
            </button>
            <button
              className={isEditable ? "btn-primary px-4" : "btn-disabled px-4"}
              disabled={!isEditable}
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </CustomerLayout>
  );
};

export default ProfilePage;
