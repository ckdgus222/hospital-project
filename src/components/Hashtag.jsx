import "./../style/Hashtag.css";

const Hashtag = ({ text, click }) => {
  return (
    <div
      className="hashtag"
      onClick={() => {
        click();
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Hashtag;
