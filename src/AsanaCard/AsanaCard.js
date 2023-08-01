
const AsanaCard = ({ pose }) => {
  return (
    <div className="asana-card">
      <h3>{pose.english_name}</h3>
      <p>Sanskrit Name: {pose.sanskrit_name}</p>
      <p>Description: {pose.pose_description}</p>
      <p>Benefits: {pose.pose_benefits}</p>
      <img src={pose.url_svg} alt={pose.english_name} />
    </div>
  );
};

export default AsanaCard;
