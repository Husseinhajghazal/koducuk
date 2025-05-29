import { twMerge } from "tailwind-merge";

const generateColorFromName = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 50%)`;
};

const generateInitials = (firstName, lastName) => {
  return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
};

const ProfilePicture = ({
  firstName,
  lastName,
  className = "",
  showEmail = false,
  email = "",
}) => {
  const initials = generateInitials(firstName, lastName);
  const bgColor = generateColorFromName(initials);

  return (
    <div className={twMerge("flex items-center gap-3", className)}>
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </div>
      {showEmail && (
        <div className="flex flex-col">
          <span className="font-semibold text-white">{`${firstName} ${lastName}`}</span>
          <span className="text-sm text-gray-500">{email}</span>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
