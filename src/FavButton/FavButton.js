import favorited from "../images/favorited.png";
import notFavorited from "../images/not-favorited.png";
import "./FavButton.css";
import PropTypes from 'prop-types'; 

const FavButton = ({ pose, handleToggleFavorite, isFavorited }) => {
  const handleClick = () => {
    handleToggleFavorite(pose);
  };

  return (
    <div onClick={handleClick}>
      <img
        className="fav-btn"
        src={isFavorited ? favorited : notFavorited}
        alt="like-button"
      />
    </div>
  );
};

FavButton.propTypes = {
  pose: PropTypes.shape({
    id: PropTypes.number.isRequired,
    english_name: PropTypes.string.isRequired,
    sanskrit_name: PropTypes.string.isRequired,
    url_svg: PropTypes.string.isRequired,
    pose_description: PropTypes.string.isRequired,
    pose_benefits: PropTypes.string.isRequired
  }),
  handleToggleFavorite: PropTypes.func.isRequired,
  isFavorited: PropTypes.bool.isRequired,
};

export default FavButton;
