import { video } from "./../util/video.js";
import "./../style/Records.css";
import { useSelector } from "react-redux";
import { ache } from "../util/ache.js";

//

const Records = ({ bool }) => {
  const targetVideo = useSelector((state) => state.hospital.target);

  const boxStyle = {
    backgroundColor: bool ? "#666775" : "#fff",
  };
  const pStyle = {
    color: bool ? "#fff" : "black",
  };

  return (
    <div className="records" style={boxStyle}>
      <div className="records_wrapper">
        <div className="records_video">
          <iframe
            width="100%"
            height="100%"
            src={video(targetVideo)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="records_text">
          <p style={pStyle}>증상에 따른 좋은 영상 확인하세요!</p>
        </div>
      </div>
    </div>
  );
};

export default Records;
