import "./Profile.css";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({
  clothingItems,
  weatherType,
  handleCardClick,
  onAddClick,
  onEditProfile,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfile={onEditProfile} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          weatherType={weatherType}
          handleCardClick={handleCardClick}
          onAddClick={onAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
