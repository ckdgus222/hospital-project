import "./../style/Card.css";

const Card = ({ content }) => {
  const { name, number, address, img } = content;

  return (
    <div className="card">
      <div className="card_img">
        <img src={img} />
      </div>
      <div className="content_text">
        <div className="header_title">
          <strong>{name}</strong>
        </div>
        <p>{address}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Card;
