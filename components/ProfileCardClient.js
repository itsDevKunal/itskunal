'use client';
import ProfileCard from "./ProfileCard";

export default function ProfileCardClient() {
  const handleContactClick = () => {
    alert("Contact clicked!");
  };

  return (
    <ProfileCard
      name="Kunal Bera"
      title="Full Stack Web-Developer"
      handle="itsdevkunal"
      status="Online"
      contactText="My GitHub"
      avatarUrl="/avator.png"
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={true}
      onContactClick={() => window.location.href = "https://github.com/itsdevkunal"}
    />
  );
}