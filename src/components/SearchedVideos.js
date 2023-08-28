import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import SearchedVideoCard from "./SearchedVideoCard";
import { Link } from "react-router-dom";
// import useSearchedVideosFetch from "../Shared/useSearchedVideosFetch";
import useFetchApi from "../CustomHooks/useFetchApi";
import { SEARCHED_VIDEO_API } from "../utils/constant";

const SearchedVideos = () => {
  const [searchparam] = useSearchParams();

  const query = searchparam.get("search_query");
//   const { searchedList } = useSearchedVideosFetch(query);
    const { data, loading } = useFetchApi(SEARCHED_VIDEO_API + query)
  console.log(data);

  const loader = useRef(null);
 
    if (loading) return null
  return (
    <div>
      {data.map((item) => (
        <Link to={"/watch?v=" + item.id.videoId} key={item.id.videoId}>
          <SearchedVideoCard videoType="searched" video={item} />
        </Link>
      ))}

      <div ref={loader} />
    </div>
  );
};

export default SearchedVideos;