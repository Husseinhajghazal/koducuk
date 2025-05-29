"use client";

import ProfilePicture from "../ui/ProfilePicture";
import Button from "../ui/Button";

export default function ProfileHeader({ user, onLogout }) {
  return (
    <div className="bg-black-700 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
      <div className="flex items-center gap-6">
        <ProfilePicture
          firstName={user.first_name}
          lastName={user.last_name}
          showEmail={true}
          email={user.email}
          className="!w-auto"
        />
      </div>
      <Button
        onClick={onLogout}
        type="button"
        className="border-red-500 hover:border-red-600 bg-red-500 hover:bg-red-600"
      >
        Çıkış Yap
      </Button>
    </div>
  );
}
