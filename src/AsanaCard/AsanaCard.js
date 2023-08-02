
const AsanaCard = ({ pose }) => {
  return (
    <div className="asana-card">
      <h3 className="name">{pose.english_name}</h3>
      <p className="sanskrit-name">Sanskrit Name: {pose.sanskrit_name}</p>
      <p className="description">Description: {pose.pose_description}</p>
      <p className="benefits">Benefits: {pose.pose_benefits}</p>
      <img className="asana-image" src={pose.url_svg} alt={pose.english_name} />
    </div>
  );
};

export default AsanaCard;
