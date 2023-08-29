const API_KEY = "AIzaSyDiVYWgjkXXGok8voVXQ0P-kDvJaxvq7ZE"

export const VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=70&regionCode=IN&key=" + API_KEY

export const VIDEOS_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id=";

export const SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//export const RELATED_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&type=video&key=" + API_KEY + "&relatedToVideoId=";

export const SEARCHED_VIDEO_API =
  "https://corsanywhere.herokuapp.com/https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&regionCode=IN&type=video&key=" +
  API_KEY +
    "&q=";
  
export const RELATED_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" + API_KEY ;
  
export const textLimit = 20