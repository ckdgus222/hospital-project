export const imgStyles = (imgStyle) => {
  let stylesImg;
  switch (imgStyle) {
    case 0:
      stylesImg = {
        position: "absolute",
        left: "150px",
        top: "100px",
      };
      break;
    case 1:
      stylesImg = {
        position: "absolute",
        right: "600px",
        top: "100px",
      };
      break;
    case 2:
      stylesImg = {
        position: "absolute",
        bottom: "200px",
        left: "300px",
      };
      break;
    case 3:
      stylesImg = {
        position: "absolute",
        right: "150px",
      };
      break;
    case 4:
      stylesImg = {
        position: "absolute",
        left: "600px",
        top: "30px",
      };
      break;
    case 5:
      stylesImg = {
        position: "absolute",
        left: "130px",
        top: "550px",
      };
      break;
    case 6:
      stylesImg = {
        position: "absolute",
        right: "300px",
        bottom: "150px",
      };
      break;
    default:
      return null;
  }
  return stylesImg;
};
