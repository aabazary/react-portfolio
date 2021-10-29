import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
//required to import in order to view resume
import MyPDF from '../pages/akon_resume.pdf'

export default function Resume() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">

      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>

            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ashkon Abazary
            </span>
          </h1>
          <p className="text-xl text-gray-500 leading-8 text-center">
          San Diego, CA 92071	
          </p>
          <div className="mt-6">
                
                <dd className="flex justify-around">
                  <span className="flex"><PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 ‪(619) 880-7427</span></span>
                  <span className="flex"><MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">aabazary@gmail.com</span></span>
                </dd>
           </div>

        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto text-center">
        <h2 className="text-black text-2xl font-bold">Summary</h2>
          <p>
          Full Stack Web Developer with an Entrepreneurial background that has trained me to manage and solve problems with great efficiency and fervor. 
        </p>
        <h2 className="mt-4 text-black text-2xl font-bold">Technical Skills</h2>
          <p>
          HTML5,CSS3, Javascript, Bootstrap, Tailwind, Node Js, Express, MuSQL, Handlebars.js, Heroku, Insomnia
        </p>
        <h2 className="mt-4 text-black text-2xl font-bold">Projects</h2>
        
          <span className="text-indigo-500">Gamers Unite</span>
        <ul className="text-gray-500">
          <li>A Gamers Information hub, that allows the storage of Game Information, as well as a forum in order to discuss aspects of each game.</li>
          <li>Primarily responsible for UI/UX of application.</li>
          <li className="mb-4">HTML5, Tailwind, Javascript, Node Js, Express, MySQL, Heroku, Handlebars.js</li>
          </ul>
          <span className="mt-6 text-indigo-500">README Generator </span>
          <ul className="text-gray-500">
          <li>An ever evolving README Generator.</li>
          <li>Created the entire Application.</li>
          <li>HTML 5, Javascript, Node.js.</li>
        </ul>
        
        <h2 className="mt-4 text-black text-2xl font-bold">Experience</h2>
          <span className="text-indigo-500">Akon Auto Center- Owner (2012-Present)</span>
          
        <ul className="text-gray-500">
          <li>Recruited and Supervised a team of 8. </li>
          <li className="mb-4">Orchestrated a business that after 2 years achieved an annual gross sale of $1,000,000. </li>
          </ul>
          <span className="text-indigo-500 mt-6">Smog Station 1- Service Manager (2007-2012)</span>
          <ul className="text-gray-500">
          <li>An ever evolving README Generator.</li>
          <li>Created the entire Application.</li>
          <li>HTML 5, Javascript, Node.js.</li>
        </ul>
        
        <h2 className="mt-4 text-black text-2xl font-bold">Education</h2>
          <p>
          Full Stack Web Development Certificate:UCSD Extenstion
        </p>
        </div>
        <div className="mt-4 flex justify-center"> 
        {/* required to import in order to see the pdf, pulling directly was giving errors */}
        <a
        href={MyPDF} download="akon_resume.pdf" target="_blank" rel="noreferrer"
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Download Resume
      </a>
      </div>
      </div>
    </div>
  )
}
