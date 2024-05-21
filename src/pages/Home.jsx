import Search from "../components/Search";
import Bound from "../components/Bound";
import "./../style/Home.css";
import { imgs } from "../util/img"
import { imgStyles } from "../util/imgStyles";

const Home = () => {
  return (
    <div className="Home">
      {imgs.map((item,i)=>{
         return <Bound key={i} img={imgs[i]} styles={imgStyles(i)}/>
      })}  
      <h3>분당구 병원 찾기</h3>
      <Search />
    </div>
  );
};

export default Home;
