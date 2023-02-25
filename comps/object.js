import Image1 from '../public/todoapp.JPG'
import Image2 from '../public/tastymeals.JPG';
import Image3 from '../public/youthsummit.JPG';
import Image4 from  '../public/one.png';
import Image5 from '../public/microversePortfolio.JPG';
import Image6 from '../public/coviddd.JPG';



const Projects = [
    {   id: 1,
        name: 'Todo App',
        img: Image1,
        description: 'This is a todo app done in Microverse to test my skills in javascript. It allows a user type and edit tasks',
        liveLink: 'summyalena.github.io/Todo-List-App/',
        codeLink: 'https://github.com/summyalena/Todo-List-App',
        techStack: 'HTML, CSS, JAVASCRIPT',
    },
    {    
        id: 2,
        name: 'Tasty Meals',
        img: Image2 ,
        description: 'This is a web application that allows one make basic bookings for meals',
        liveLink: 'https://tastmeals.netlify.app/',
        codeLink: 'https://github.com/summyalena/Tastmeals',
        techStack: 'React, CSS, JAVASCRIPT',
    },
    {
        id: 3,
        name: 'Youth Summit',
        img: Image3,
        description: 'This is a Web application that advertises a youth conference upcoming in the country',
        liveLink: 'https://summyalena.github.io/YouthSummit/',
        codeLink: 'https://github.com/summyalena/YouthSummit',
        techStack: 'HTML, CSS, JAVASCRIPT',
    },
    {
        id: 4,
        name: 'Tip Calculator',
        img: Image4,
        description: 'This is a web app that makes calculations of tips given to workers',
        liveLink: 'https://tip-calculator-orpin-psi.vercel.app/',
        codeLink: 'https://github.com/summyalena/Tip-calculator',
        techStack: 'Nextjs, Tailwindcss, JAVASCRIPT',
    },
    { 
        id: 5,
        name: 'Microverse Portfolio',
        img: Image5,
        description: 'This is a professional Portfolio done in Microverse testing our skills in javascript, Html and CSS',
        liveLink: 'https://summyalena.github.io/Website-Portfolio/',
        codeLink: 'https://github.com/summyalena/Website-Portfolio',
        techStack: 'HTML, CSS, JAVASCRIPT',
    },
    {
        id: 6,
        name: 'Covid Cases',
        img: Image6,
        description: 'This is a web application that checks the statistics of covid cases in the continent',
        liveLink: 'https://covidcheckssplend.netlify.app/',
        codeLink: 'https://github.com/summyalena/Covid-cases',
        techStack: 'React, CSS, JAVASCRIPT',
    },
]

export default Projects;