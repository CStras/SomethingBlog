import newsShot from "../assets/newsShot.jpg";
import fav from "../assets/fav.svg";
import logo from "../assets/logo.svg";
import wtwrShot from "../assets/wtwrShot.jpg";
import spotsFav from "../assets/favicon.ico";
import spotsShot from "../assets/spotsShot.jpg";

const projects = [
  {
    title: "News Explorer",
    author: "Colin Strasser",
    date: "4/5/2025",
    description:
      "This project is for the final sprint before graduation (sprint 16). We had the option to either create a front-end project or a full stack project and due to time constraints, I moved forward with a front-end project. Due to this only being a front-end project, any atempt at logging in or registering will 'succeed' but will either display that the account was created or just sign you into a fake user account. All other functionality works as long as the page is not refreshed. This project centers around using ReactJS, HTML and CSS. The API used in this project is News API (https://newsapi.org/). This API uses the JSON format for news articles that are trending. We will use this API to make requests based on the searched topic from the user. Note: website can be fully experienced by downloading repo and running *npm run dev* in terminal",
    url: [fav, newsShot],
    id: "p1",
    repoLink: "https://github.com/CStras/se_project_news-explorer",
    siteLink: "https://cstras.github.io/se_project_news-explorer/",
  },
  {
    title: "WTWR",
    author: "Colin Strasser",
    date: "4/5/2025",
    description:
      "This is a simple project designed to take the user's location and display the temperature, weather condition and clothing suggestions for going outside. This project is the first of many that will use React. A blend of HTML, CSS, JS, including native and remote API calls. This particular API used in the project is OpenWeather API. This API returns quite a lot of information but this project only used the current temperature and weather condition based on what the user's location is. The latest update added a delete button to the preview on clothing items. NOTE: github pages link site will work but the user will not be able to add/delete clothing cards as the json server is not set up nor will be until the project migrates to Google Cloud 👌",
    url: [logo, wtwrShot],
    id: "p2",
    repoLink: "https://github.com/CStras/se_project_react",
    siteLink: "https://www.wtwr.developer.li/",
  },
  {
    title: "Spots",
    author: "Colin Strasser",
    date: "4/5/2025",
    description:
      "This is a front-end project focused on making API requests and handling responses. The website emulates a blog site just for images. Likes, deletes and any edits stay updated after the page is reloaded.",
    url: [spotsFav, spotsShot],
    id: "p3",
    repoLink: "https://github.com/CStras/se_project_spots/tree/main",
    siteLink: "https://cstras.github.io/se_project_spots/",
  },
];

export default projects;
