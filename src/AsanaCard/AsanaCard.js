
import "./AsanaCard.css";
import FavButton from "../FavButton/FavButton";

const AsanaCard = ({ pose, handleToggleFavorite, favoritedPoses }) => {
  console.log('favoritedPoses***:', favoritedPoses)
  const isFavorited = favoritedPoses.some((favPose) => favPose.id === pose.id);

  console.log('isFavorited', isFavorited)
  console.log('pose:', pose)

  return (
    <div className="asana-card">
      <div className="header">
        <div className="header-content">
          <h3 className="name">{pose.english_name}</h3>
          <p className="sanskrit-name">{pose.sanskrit_name}</p>
        </div>
        <FavButton
          key={pose.id}
          pose={pose}
          favoritedPoses={favoritedPoses}
          isFavorited={isFavorited}
          handleToggleFavorite={() => handleToggleFavorite(pose.id)}
        />
      </div>
      <img className="asana-image" src={pose.url_svg} alt={pose.english_name} />
      <p className="description">Description: {pose.pose_description}</p>
      <p className="benefits">Benefits: {pose.pose_benefits}</p>
    </div>
  );
};

export default AsanaCard;
