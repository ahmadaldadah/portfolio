import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ahmad.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I’m passionate about crafting amazing applications that provide
            great user experiences. With 3 years of experience as a Front-End
            Developer, I specialize in building dynamic, responsive, and
            visually appealing web applications. My journey in web development
            has equipped me with a strong foundation in modern technologies,
            allowing me to bring ideas to life with precision and creativity.
          </p>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1VFqs-UicW8B3mXD-hCrL4JnIJvNSi3pi/view?usp=sharing"
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
