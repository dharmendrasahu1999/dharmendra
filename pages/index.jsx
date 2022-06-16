import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dharmendra Sahu</title>
        <meta name="description" content="Dharmendra Sahu" />
        <link rel="icon" href="/favicon_dk.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <div className="md:container md:mx-auto" style={{display:'flex',justifyContent:'center'}}>
                <Image height="350" width="600" alt="tushar-display-image" src="/myCoverImage.png"  />
              </div>


              <br></br>
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Dharmendra Sahu👋
              </h1>
              {/* <p className="text-xl pb-4">
                Welcome to my Website. I'm Tushar Kumar Singh.
              </p> */}
              <p className="text-xl">
                I am a 3rd Year Undergrad at Shri Mata Vaishno Devi University Katra pursuing a Bachelor of Technology majoring in Computer Science and Engineering (2019-2023) .
              </p>
              <p className="text-xl pb-4">
                My experience revolves around competitive programming and am highly interested in Algorithmic Problem Solving with a firm grasp in Data Structures and Algorithms.I am an active participant in Codeforces and Codechef. My handler is <a
                  className="hover:text-blue-900 text-blue-200 font-bold"
                  href="https://www.stopstalk.com/user/profile/UI_OMEN"
                  target="_blank"
                  rel="noreferrer"
                >UI_OMEN</a> in all these sites.

              </p>
              <p className="text-xl pb-4">
                I love exploring new creative things ,  my hobby is to draw and currently  learning  Front-end web development tools and technologies to deploy cross-platform web-apps which develop sustainable, social and technical systems to create impact.
              </p>
              <p className="text-lg pb-10">
                <Link href="/about">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Tech Stack 🛠
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span className="underline">Languages</span>: JavaScript,
                  C++, C, HTML5, CSS3{" "}
                </li>
                <li className="my-2">
                  <span className="underline">Frameworks and Libraries</span>:
                  React.js, Next, Node, Express
                </li>
                <li className="my-2">
                  <span className="underline">Platforms</span>: Git (Github), Heroku, AWS, Google Firebase
                </li>
                <li className="my-2">
                  <span className="underline">Database</span>: MongoDB, SQL,
                </li>
                <li className="my-2">
                  <span className="underline">Design Libraries</span>:
                  TailwindCSS, Bootstrap, MaterialUI
                </li>
              </ul>

            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Achievements🏅
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://codeforces.com/profile/UI_OMEN"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Achieved Global Rank 1930 among 17.5k+ participants in Educational Codeforces Round 789 May 2022
                    </a>
                  </span>
                  <span className="font-500"> @Codeforces</span>{" "}
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.codechef.com/users/uiomen"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Achieved Global Rank 1003 among 4.3k+ participants in Codechef Starters 8 Aug 2021
                    </a>
                  </span>
                  <span className="font-500"> @Codechef</span>{" "}
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://drive.google.com/file/d/1lXOydLkexw89Ko-6pWokfhnzT0WXhf6f/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Achieved Global Rank 3178 among 18k+ participants in Google Kickstart Round A 2022
                    </a>
                  </span>
                  <span className="font-500"> @Google Coding Competitions</span>{" "}
                </li>
                {/* <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://auth.geeksforgeeks.org/user/tusharkunar430/practice/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      College Rank 3 in Geeks For Geeks, solved more than 500+ problems on various coding sites.
                    </a>
                  </span>
                  <span className="font-500"> @GFG</span>{" "}
                </li> */}
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://drive.google.com/file/d/1IDHOdR70q0SI434leP4YQ9vO8_kP0yGw/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Qualified Google Code Jam 2022 among 33k+ participants.
                    </a>
                  </span>
                  <span className="font-500"> @Google Coding Competitions</span>{" "}
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.hackerrank.com/Omegamon_MM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      5 Star in C++, Problem Solving (Basic) Certification in HackerRank
                    </a>
                  </span>
                  <span className="font-500"> @Hackerrank</span>{" "}
                </li>
              </ul>
              {/* <p className="text-lg pb-10">
                <Link href="/talks">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p> */}
            </div>
            {/* <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Recent Blog Posts 📚
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/top-12-tips-on-how-to-excel-at-your-developer-job"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Top 12 Tips on how to excel 🚀at your developer job!
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/know-how-git-works-behind-the-scenes-aa40567082ba"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Know how Git works: Behind the Scenes!🤯
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/7-open-source-spirits-you-must-know"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      7 Open Source Spirits you must know!
                    </a>
                  </span>
                </li>
              </ul>
              <p className="text-lg pb-10">
                <a
                  className="hover:underline"
                  href="https://sohamsshah.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More...
                </a>
              </p>
            </div> */}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
