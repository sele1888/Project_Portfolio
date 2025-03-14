AOS.init();

//  Work about cards

// const aboutcards = document.querySelector(".about-cards");
// const exp = [
//   {
//     title: "Full-Stack Developer ",
//     cardImage: "assets/images/about-page/ex.png",
//     place: "Freelancer",
//     time: "(June, 2022 - present)",
//     desp: "<li> I Made changes in the progressive web as Contract Web Developer.</li> <li>Made Implemented UI/UX enhancements progressive web applications</li> <li>As a passionate Full-Stack Developer eager to leverage my skills in a professional setting, I've actively honed my abilities by optimizing progressive web applications  through code modifications and feature enhancements. This about, gained through freelance projects and personal initiatives, has equipped me to improve website performance, user about, and functionality.</li>",
//   },
//   {
//     title: "IT Trainer ",
//     cardImage: "assets/images/about-page/Gage.png",
//     place: "GAGE UNIVERSITY COLLEGE ",
//     time: "(September 2018 - June, 2021)",
//     desp: "<li> Developed a diverse web development skillset Proficient in HTML, CSS (including Bootstrap), and JavaScript.</li><li>Strong worked to have students understanding of back-end technologies about with SQL databases.</li><li>Familiarity with programming languages: Exposure to PHP, Java, and Python</li><li>wored on  emerging technologies: Continuously learning and exploring new areas within the tech field.</li>",
//   },
//   {
//     title: "Research Intern",
//     cardImage: "assets/images/about-page/unity.jpg",
//     place: "Web-Based Online Tour and Travel System",
//     time: "(January, 17 - July, 2017)",
//     desp: "<li>Through this about, I honed my research and analytical skills, while gaining valuable insights into user-centered design and the ever-evolving travel industry. I learned the importance of understanding user needs, staying abreast of new technologies, and collaborating effectively to develop innovative solutions..</li><li>Designed included functionalities like booking systems, payment integrations, and personalized recommendations.</li>",
//   },
// ];

// const showCards2 = () => {
//   let output = "";
//   exp.forEach(
//     ({ title, cardImage, place, time, desp }) =>
//       (output += `        
//     <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
//       <div class="card card1">
//         <img src="${cardImage}" class="featured-image"/>
//         <article class="card-body">
//           <header>
//             <div class="title">
//               <h3>${title}</h3>
//             </div>
//             <p class="meta">
//               <span class="pre-heading">${place}</span><br>
//               <span class="author">${time}</span>
//             </p>
//             <ol>
//               ${desp}
//             </ol>
//           </header>
//         </article>
//       </div>
//     </div>
//       `)
//   );
//   aboutcards.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Front-End Developer ",
    cardImage: "assets/images/about-page/html.png",
    description:
      "Solid Foundation: I've built a strong foundation in HTML syntax and best practices, allowing me to create well-structured and semantic web pages.",
  },
  {
    title: "UI/UX Developer",
    cardImage: "assets/images/about-page/css2.png",
    description:
      "I can craft complex and responsive layouts using CSS, I have deep understanding of responsive design principles and frameworks like Bootstrap.",
  },
  {
    title: "Response Web Developer",
    cardImage: "assets/images/about-page/j2.jpg",
    description:
      "I can be Building Interactive website (React, Angular, and Vue.js). My Portfolio showcase my skills & collaboration abilities.",
  },
  {
    title: "Back-End Developer",
    cardImage: "assets/images/about-page/back.jpg",
    description:
      "I'm a skilled back-end developer with expertise in PHP, Python, and Java. I craft APIs and server-side logic, leveraging my proficiency in SQL & MYSQL.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Aspiring Hackathon Participant",
    subtitle: "Coming soon ",
    image: "assets/images/about-page/h8.jpg",
    desp: "I'm an aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about problem-solving and learning new technologies. While I haven't participated in a hackathon yet, I'm eager to leverage my skills and teamwork abilities to collaborate on innovative projects in future hackathons.",
    href: "#",
  },
  {
    title: "Coming soon",
    subtitle: "Stay Tuned!",
    image: "assets/images/about-page/h11.gif",
    desp: "I'm an aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about problem-solving and learning new technologies. While I haven't participated in a hackathon yet, I'm eager to leverage my skills and teamwork abilities to collaborate on innovative projects in future hackathons.",
    href: "#",
  },
  {
    title: "Coming soon",
    subtitle: "Stay Tuned !",
    image: "assets/images/about-page/h2.jpg",
    desp: "I'm an aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about problem-solving and learning new technologies. While I haven't participated in a hackathon yet, I'm eager to leverage my skills and teamwork abilities to collaborate on innovative projects in future hackathons.",
    href: "#",
  },
  {
    title: "Coming soon",
    subtitle: "Stay Tuned !",
    image: "assets/images/about-page/h6.jpg",
    desp: "I'm an aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about problem-solving and learning new technologies. While I haven't participated in a hackathon yet, I'm eager to leverage my skills and teamwork abilities to collaborate on innovative projects in future hackathons.",
    href: "#",
  },
  {
    title: "Coming soon",
    subtitle: "Stay Tuned !",
    image: "assets/images/about-page/h7.png",
    desp: "I'm an aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about problem-solving and learning new technologies. While I haven't participated in a hackathon yet, I'm eager to leverage my skills and teamwork abilities to collaborate on innovative projects in future hackathons.",
    href: "#",
  },
  {
    title: "Coming soon",
    subtitle: "Stay Tuned !",
    image: "assets/images/about-page/h5.png",
    desp: "I'm an aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about problem-solving and learning new technologies. While I haven't participated in a hackathon yet, I'm eager to leverage my skills and teamwork abilities to collaborate on innovative projects in future hackathons.",
    href: "#",
  },
  // To be expanedable for the next work
  // {
  //   title: "UniGlobe Hacks",
  //   subtitle: "Judge",
  //   image: "assets/images/about-page/uniglobe.png",
  //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  //   href: "https://uniglobe-hacks.devpost.com/",
  // },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/about-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  //   href: "https://atlashacks2.devpost.com/",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/about-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  //   href: "https://neohacks.org/",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/about-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding about into a product beneficial to the educational community.",
  //   href: "https://www.missioninspired.org/hackathon",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/about-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  //   href: "https://hack3.co/",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/about-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  //   href: "https://jithack.netlify.app/",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/about-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  //   href: "https://recesshacks.com/",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/about-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  //   href: "https://citro.tech/",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/about-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  //   href: "https://nhacks-vi.devpost.com/",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
