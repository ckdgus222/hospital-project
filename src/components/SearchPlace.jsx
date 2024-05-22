import { useEffect, useState } from "react";
import "./../style/SearchPlace.css";
import KakaoMap from "./KakaoMap";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowAll } from "../slice/hospitalSlice";
import useFetch from "../hooks/useFetch";

const SearchPlace = () => {
  const mokList = useSelector((state) => state.hospital.data);
  const btnBool = useSelector((state) => state.hospital.showAll);
  const listData = useSelector((state) => state.hospital.filterdData || []);
  const [inputText, setInputText] = useState("");
  const [inputData, setInputData] = useState([]);
  const dispatch = useDispatch();
  const nav = useNavigate();

  /*
    useEffect(() => {
    if (mokList && mokList.length > 0) {
      setInputData(mokList);
    }
  }, [mokList]); */

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputText(inputValue);

    if (inputValue === "") {
      setInputData(mokList);
    } else {
      const filterList = mokList.filter((item) => {
        return item.name.toLowerCase().includes(inputValue);
      });
      setInputData(filterList);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showList = inputText.length > 0 ? inputData : btnBool ? listData : mokList;



  return (
    <div className="searchPlace">
      <div className="search_container">
        <div className="form_container">
          <form onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={handleInputChange} placeholder="검색할 병원을 입력하세요..." />
          </form>
          <button
            onClick={() => {
              nav("/");
              dispatch(toggleShowAll(true));
            }}
          ></button>
        </div>
        <div className="content">
          {showList && showList.length > 0
            ? showList.map((item) => <Card key={item.id} content={item} />)
            : mokList.map((item) => <Card key={item.id} content={item} />)}
        </div>
      </div>
      <KakaoMap hospitals={showList} searchQuery={inputText} />
    </div>
  );
};

export default SearchPlace;
