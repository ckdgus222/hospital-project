import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "../slice/hospitalSlice";

// 커스텀훅 수정
const useFetch = (URL) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dbFunc = async () => {
      dispatch(fetchDataStart());
      try {
        const hospital = await axios.get(URL);
        const newList = await hospital.data.hospital
        if (hospital.status === 200) {
          dispatch(fetchDataSuccess(newList));
        }
      } catch (error) {
        dispatch(fetchDataFailure(error.toString()));
      }
    };
    dbFunc();
  }, [URL, dispatch]);
};

export default useFetch;
