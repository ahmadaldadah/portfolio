import React from 'react'

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
            I'm front-end developer with 2 years experiences
          </p>
          <div className="flex justify-center">
            <a
              href="https://doc-0c-6o-apps-viewer.googleusercontent.com/viewer/secure/pdf/eu0rivmc2kh7of9pho3aso8e5bstc65j/oek5eeelb0f0g5c9kamli36k6hsht6nb/1661204400000/drive/12323390284288799324/ACFrOgArrB6byV5xB6bsxmrQXw2CPn8GSjkqsuJbWTuRNW4hQegBMm_7Mw31vQCYy78N2VemidFl30-LD5C4oen_KE3_XWge94RDXXkJp1Girqzu3Rpz8V5GmkBAfj282QNJdbGpG3eEi_vLmlaS?print=true&nonce=34hp66qjir9io&user=12323390284288799324&hash=smldvao5q4hkfphh5fliporr66gmhi2e"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              My Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
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
  )
}

export default About