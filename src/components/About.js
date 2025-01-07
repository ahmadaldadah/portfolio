import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ahmad.
            <br className="hidden lg:inline-block" />
            Creating exceptional web applications is my passion.
          </h1>
          <p className="mb-8 leading-relaxed">
            As an expert Front-End Developer, I excel at creating dynamic, responsive,
            and visually appealing websites that offer great user experiences.
            I’m skilled in turning UI/UX designs into fully functional and responsive websites,
            ensuring they look and work beautifully on any screen size. With a focus on creativity and functionality,
            I bring ideas to life in a way that leaves a lasting impact.
          </p>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1YY11pRDa70LrXkWpQlBL2CldYDLD9pKa/view?usp=sharing"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              My Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./img/Ahmad.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
