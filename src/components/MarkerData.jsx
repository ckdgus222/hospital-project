import "./../style/MarkerData.css";


const MarkerData = ({ hospitals }) => {
  return (
    <div className="marker_container">
      <b>{hospitals.name}</b>
      <br />
      <div className="img_container">
        <img src={hospitals.img} alt={hospitals.name} />
      </div>
    </div>
  );
};

export default MarkerData;
