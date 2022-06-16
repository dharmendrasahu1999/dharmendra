import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import { MdiGithub } from "../assets/Socials";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Dharmendra Sahu | Projects</title>
        <meta name="description" content="Dharmendra Sahu" />
        <link rel="icon" href="/favicon_dk.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Projects 💻
              </h1>
              <p className="text-xl pb-4">
                I build and break stuff to experiment with technologies I am
                passionate about. My Projects consist of front-end
                applications, full-stack applications - solving real world problems using Data structures and Algorithms knowledge and things
                that gave me dopamine hits during their development.
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Ongoing 🚶‍♂️
              </p>
              <ul className="pl-6 text-xl pb-4 list-disc">
                {/* <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a className="hover:underline" href="https://github.com/crimemaster007/Instagram-Reels-Clone">Instagram-Reels-Clone</a>
                  </h2>
                  <p className="mb-2">
                    A web app where users can signup and upload short videos, like posts uploaded by other users and comment on them.
                  </p>
                  <p className="mb-2">
                    Firebase for user authentication and storage,where user get notified when others follow him, comment or like his post.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: ReactJs, Firebase, Material UI, JavaScript
                  </p>
                </li> */}
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a className="hover:underline" href="https://github.com/dharmendrasahu1999/talkApp">Chit-Chat/talkApp</a>
                    
                  </h2>
                  <p className="mb-2">
                    A Fully Responsive Full Stack Realtime Chat Messaging App with authentication and SMS Notifications, Direct and
                    Group Chat, Emoji’s and Reactions, built-in GIF’s support,ability to edit and delete messages, specialized commands.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: NodeJs, Stream-Api, ReactJs, JavaScript
                  </p>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Built ⌨🔧
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
              <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a className="hover:underline" href="https://github.com/dharmendrasahu1999/instagramReelsClone">Instagram-Reels-Clone</a>
                  </h2>
                  <p className="mb-2">
                    A web app where users can signup and upload short videos, like posts uploaded by other users and comment on them.
                  </p>
                  <p className="mb-2">
                    Firebase for user authentication and storage,where user get notified when others follow him, comment or like his post.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: ReactJs, Firebase, Material UI, JavaScript
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a className="hover:underline" href="https://github.com/dharmendrasahu1999/MovieTrendingApp">Movies-App</a>
                  </h2>
                  <p className="mb-2">
                    A ReactJS Movies App based on TMDb API to demonstrate react-query use cases as a state management library where you can Search movies, Add/Remove movies to Favourites & Filter movies according to their Popularity & Ratings. 🔥
                  </p>
                  {/* <p className="mb-2">
                    Also, MockBee is still actively developed and more and more
                    new APIs are being added to the project for helping more and
                    more frontend devs in the community!🚀
                  </p> */}
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: Tmdb-Api,
                     React, JavaScript, Html, CSS.
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a href="https://github.com/dharmendrasahu1999/myOpenBoard">
                      Real-time Openboard
                    </a>
                  
                  </h2>
                  <p className="mb-2">
                    A Real-Time Open board project made using JavaScript, with real-time drawing using socket.io and express.
                    The project comprises of basic openboard functionalities such as, writing, erasing, downloading the canvas, adding notes (with minimising it, closing it, dragging it around on the page), uploading the image (features same as of notes), undo and redo actions.
                    Added realtime drawing functionality using Socket.io by connecting to server using Express.js. 🚀
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: Socket.io,
                    ExpressJs, Javascript, Html, CSS
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a href="https://github.com/dharmendrasahu1999/excelClone">
                      Excel-Clone
                    </a>
                  </h2>
                  <p className="mb-2">
                    Excel clone is built using electron framework with technologies such as HTML, CSS, JQuery and Ejs as a templating engine . Some features of this project are - Formula evaluation , Cycle detection in formula , New open save functionality , Cells formatting.
                  </p>
                  <p className="mb-2">
                    Cycle Detection and Cyclic path tracing in excel cells is implemented using Depth-First-Search Algorithm.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: Html, CSS, JavaScript, DOM Manipulation
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a href="https://github.com/dharmendrasahu1999/cameraGalleryWebapp">
                      Camera-Gallery-Webapp
                    </a>
                    
                  </h2>
                  <p className="mb-2">
                    It is a camera application for clicking pictures, creating videos, and can also do screen recording. All the media will be stored in the gallery of the application and can be deleted or downloaded from there.
                  </p>
                  <p className="mb-2">
                    The gallery data can be filtered according to Images, Videos, and Screen Recording.
                    All the data is stored in the IndexDB storage system, therefore, no loss of data.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: Canvas-Api,
                    Media-Stream Api, IndexedDB, Javascript
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    <a href="https://github.com/dharmendrasahu1999/jiraTicketManagement">
                      Jira-Ticket-Management
                    </a>
                 
                  </h2>
                  <p className="mb-2">
                    It is an online project or task management site where you can create new task edit them and also you can set their priority.Also your created task are saved locally so that they are not lost when you close the tab.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: LocalStorage, Javascript, Html, CSS
                  </p>
                </li>
              </ul>
            </div>
            {/* <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Contributed 💖
              </p>
              <ul className="text-xl pb-4">
                <li className="my-4">
                  <h2 className="font-medium text-2xl mb-2">
                    caMicroscope | ActiveloopAI | Remotion
                  </h2>
                  <h2 className="font-medium text-2xl mb-2">
                    Next | React-Bootstrap | MDN Web Docs
                  </h2>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Maintaining 🤓
              </p>
              <ul className="pl-6 text-xl pb-4 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Rotten_Scripts
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/HarshCasper/Rotten-Scripts">
                        Rotten_Scripts
                      </a>
                    </span>{" "}
                    contains amazing and awesome scripts written in Python,
                    JavaScript, Bash, Powershell, and more. Major work revolves
                    around creating new issues, helping contributors with
                    existing features/bugs, reviewing PRs and overall
                    maintaining the repository.
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    JavaScriptONLY
                  </h2>

                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/codesONLY/JavaScriptONLY">
                        JavaScriptONLY
                      </a>
                    </span>{" "}
                    is a well-curated content for refering/learning JavaScript.
                    Have added JavaScript Notes, Code Snippets, Resources,
                    Books, Interview Questions and a lot more. Generally I share
                    and document my learnings here, together with the community.
                  </p>
                </li>
              </ul>
            </div>*/}
          </div> 
        </div>
        <Footer />
      </main>
    </div>
  );
}
