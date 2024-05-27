import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div className='container-fluid' id='abcont'> 
    <div className='row'>
    <div className='col' id='res1'>
    <h1 className='oranges'>About Me</h1>

<h3 id='h3'>"Enthusiastic Frontend Developer" with over 3 years of hands-on experience in building responsive and user-friendly websites. Proficient in HTML5, CSS3, and JavaScript, with a deep dive into React.js for dynamic and interactive web applications. Passionate about translating design into code and bringing ideas to life on the screen.</h3>

<h2 className='oranges'>Technical Skills</h2>
- <span><b> <u>Languages</u></b></span>: HTML, CSS, JavaScript, TypeScript <br />
- <span><b> <u>Frameworks/Libraries</u></b></span>: React.js, Redux, Angular <br />
- <span><b> <u>Tools</u></b></span>: Webpack, Babel, NPM, Git, Figma <br />
- <span><b> <u>Design</u></b></span>: Responsive Design, Material UI, Bootstrap

<h2 className='oranges'>Work Experience</h2>
- "Frontend Web Developer", @ Codify software services
  -redesign of the company's e-commerce platform, resulting in a "20%"" increase in conversion rates.
  - Implemented a new feature using **React Hooks** that improved user engagement by **30%**.

<h2 className='oranges'> Project Portfolio</h2>
- **Portfolio Website**: Developed a personal portfolio website showcasing my projects and skills. Implemented a **React-based SPA** with **CSS Grid** and **Flexbox** for layout.
- **Weather App**: Created a weather forecasting app using **OpenWeatherMap API**. Features include real-time updates, search functionality, and a sleek UI.

<h2 className='oranges'>Certifications</h2>
- React Developer Certification and salesorce LWC-apex-admin, from "Percept infosystem"
- <b> Advanced CSS and Sass</b>, Online Course

<h2 className='oranges'>Personal Qualities</h2>
- Strong problem-solving skills with a knack for debugging and optimization.
- Creative thinker who enjoys exploring new technologies and design trends.

<h2 className='oranges'>Communication Skills</h2>
- Effective communicator, able to explain complex technical concepts to non-technical stakeholders.
- Collaborative team player who values feedback and strives for excellence.

<p id='para'>I am eager to contribute my expertise to a forward-thinking team and create impactful user experiences. Let's build something amazing together!</p>

    </div>
    </div>
    </div>
  );
}