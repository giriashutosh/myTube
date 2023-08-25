const API_KEY = "AIzaSyDiVYWgjkXXGok8voVXQ0P-kDvJaxvq7ZE"

export const VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=70&regionCode=IN&key=" + API_KEY

export const VIDEOS_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id=";

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//export const RELATED_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&type=video&key=" + API_KEY + "&relatedToVideoId=";


export const RELATED_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" + API_KEY ;
  
  