import './AsanaCard.css'
import FavButton from '../FavButton/FavButton';

const AsanaCard = ({ pose, handleToggleFavorite, favoritedPoses }) => {

  const isFavorited = favoritedPoses.includes(pose.id)

  return (
    <div className="asana-card">
      <h3 className="name">{pose.english_name}</h3>
      <p className="sanskrit-name">{pose.sanskrit_name}</p>
      <FavButton isFavorited={isFavorited} handleToggleFavorite={() => handleToggleFavorite(pose.id)} />
      <img className="asana-image" src={pose.url_svg} alt={pose.english_name} />
      <p className="description">Description: {pose.pose_description}</p>
      <p className="benefits">Benefits: {pose.pose_benefits}</p>
    </div>
  );
};

export default AsanaCard;
