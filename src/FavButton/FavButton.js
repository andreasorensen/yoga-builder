import favorited from "../images/favorited.png";
import notFavorited from "../images/not-favorited.png";
import "./FavButton.css";

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

export default FavButton;
