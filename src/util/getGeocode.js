import axios from "axios";

export const getGeocode = async (address) => {
  const apikey = import.meta.env.VITE_API2_KEY;
  const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`;
  const headers = { Authorization: `KakaoAK ${apikey}` };

  try {
    const response = await axios.get(url, { headers });
    if (response.data.documents.length > 0) {
      const { y: latitude, x: longitude } = response.data.documents[0];
      return { latitude, longitude };
    }
    return null;
  } catch (error) {
    console.error("Geocode error:", error);
    return null;
  }
};
