import "./../style/Search.css";
import Hashtag from "./Hashtag";
import Records from "../components/Records"
import { ache } from "../util/ache";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { stateFilteredData, toggleShowAll,targetData } from "../slice/hospitalSlice";
import { useState } from "react";

// button 누르면 Detailed 이동

const Search = () => {
  const nav = useNavigate();
  useFetch(import.meta.env.VITE_SERVER_DATA);
  const listData = useSelector((state) => state.hospital.data);
  const dispatch = useDispatch();
  const [boolColor,setBoolColor] = useState(true)

  



  const filterSymptom = (painArea) => {
    const filterData = listData.filter((item) => item.symptom.includes(painArea));
    dispatch(targetData(painArea))

    if (filterData.length > 0) {     
      dispatch(stateFilteredData(filterData));
      setBoolColor((prev) => !prev)
      setTimeout(() => nav("/detailed"), 0);
    } else {
      console.log("No data");
    }
  };

  const hospitalClick = () => {
    dispatch(toggleShowAll(false));
    nav("/detailed");
  };

  return (
    <div className="Search">
      <h3>어디가 아프세요?</h3>
      <div className="wrapper">
        {ache.map((item, i) => (
          <Hashtag key={i} text={item} click={() => filterSymptom(item)} />
        ))}
      </div>
      <div className="records_container">
        <Records bool={boolColor}/>
      </div>
      <div className="button_style">
        <button onClick={hospitalClick} >
          병원 위치 찾기
        </button>
      </div>
    </div>
  );
};

export default Search;
