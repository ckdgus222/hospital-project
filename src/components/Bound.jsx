import "./../style/Bound.css";



const Bound = ({ img,styles }) => {
  return (
    <div className="img_bound" style={styles}>
      <img src={img} alt="img_bound" />
    </div>
  );
};

export default Bound;
