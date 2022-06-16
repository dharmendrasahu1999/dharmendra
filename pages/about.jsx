import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>Dharmendra Sahu | About</title>
        <meta name="description" content="Dharmendra Sahu" />
        <link rel="icon" href="/favicon_dk.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                About 🙋‍♂️
              </h1>
            </div>
            <div className="flex md:flex-row flex-col py-10 justify-around items-start">
              <div className="w-full border-2 p-4 shadow-md rounded-md border-50">
                <Image
                  src="/myDpBg.png"
                  height="400"
                  width="400"
                  alt="about-dp"
                />
                <h2>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                    Dharmendra Sahu
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    Competitive Programmer | Frontend developer
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                   Ghaziabad, India
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                  dharmendrasahu15oct@gmail.com
                  </span>
                </h2>
              </div>
              <div className="md:pl-16 md:pt-0 pl-0 pt-8 pr-4 md:pr-16">
                <h2 className="text-3xl font-bold pb-4 text-gray-900 dark:text-gray-200">
                  {" "}
                  Hi 👋 I&apos;m Dharmendra Sahu
                </h2>
                <p className="text-lg pb-4">
                Dharmendra is a curious person who enjoys figuring out the building blocks of the world, and rearranging them to build something even better. My career is developing software, but his life is adventuring. Currently he is tying to learn everything 😊.
                 He is a passionate engineer - whose aim is to write code for 
                  real life problems and be a part of solution.
                  {/* Programming in
                  simple terms actually boils down to one purpose - `Problem
                  Solving`. Thus, I don&apos;t prefer confining myself to a
                  particular language or framework; and instead being extremely
                  dynamic to learn and build whatever problem demands. 💻 I love to explore new tech and build cool stuff with it. 📰 Reading & writing tech blogs whenever I find a not so common solution to a problem that I personally faced. */} 
                </p>
                <p className="text-lg pb-4">
                  I am currently a 3rd Year Undergrad at Shri Mata Vaishno Devi University Katra pursuing a Bachelor of Technology majoring in Computer Science and Engineering. Have been Mentored my friends and juniors regarding programming Concepts and Computer Fundamentals.
                </p>
                <p className="text-lg pb-4">
                I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer
                I have learned various Computer Science fundamentals and practical interpersonal skills like teamwork, networking, and leadership. I am a passionate Competitive Programmer and am highly interested in solving real life problem with my keen knowlwdge of Data Structures and Algorithms.
                </p>
                <p className="text-lg pb-4">
                  Apart from Computer Science I love to play computer games, draw ✍️ and 🎨 paint my favourite anime characters.
                </p>
                <p className="text-lg pb-4">
                  Feel free to check out my{" "}
                  <a className="underline"
                    href="https://drive.google.com/file/d/1dZIrfGMt4XVrQ2dPqmIenHlcefga-AYi/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>{" "}
                  and{" "}
                  <Link href="/projects">
                    <a className="underline">Projects</a>
                  </Link>{" "}
                  .
                </p>
                <p className="text-lg pb-4">
                  Want to dicuss 💬 about Competitive programming, Tech & Data structures & algorithms? You can always
                  reach out to me on:
                </p>
                <ul className="text-xl pb-4">
                  <li className="my-2">
                    Mail:{" "}
                    <a
                      href="mailto:dharmendrasahu15oct@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      dharmendrasahu15oct@gmail.com
                    </a>
                  </li>
                  <li className="my-2">
                    Github:{" "}
                    <a
                      href="https://github.com/dharmendrasahu1999"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @dharmendrasahu1999
                    </a>
                  </li>
                  <li className="my-2">
                    Twitter:{" "}
                    <a
                      href="https://twitter.com/Dharmen06057496"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @dharmendra
                    </a>
                  </li>

                  <li className="my-2">
                    Linkedin:{" "}
                    <a
                      href="https://www.linkedin.com/in/dharmendra-sahu-82647b146/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      in/in/dharmendrasahu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
