import React from 'react';

const people = [
  {
    name: 'Ashkon Abazary' ,
    role: 'Entrepreneur/ MERN Full Stack Web Developer',
    imageUrl:
      'https://live.staticflickr.com/65535/51632398861_7b6fbd9fbc_w.jpg',
    bio:
      ' Welcome to my Page. My name is Ashkon "Akon" Abazary. I am a aspiring programmer that is currently enrolled in a Full Stack Web development Bootcamp. I am currently an Entrepreneur, and I am going to bring my entrepreneurial mind as well as my passion for computers and technology to take on the world of Web Development',
  },
  // More people...
]

export default function About() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl text-gray-100 font-extrabold tracking-tight sm:text-4xl">About Me</h2>
            <p className="text-xl text-gray-500">
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3 className="text-gray-100" >{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-400">{person.bio}</p>
                        </div>
                        {/* <ul role="list" className="flex space-x-5">
                          <li>
                            <a href={person.resumeUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 103.12 122.88">
                              <g>
                                <path d="M1.18,122.01C0.49,121.69,0,121,0,120.18V2c0-1.1,0.89-2,2-2H21.4h79.72c1.1,0,2,0.89,2,2v107.73 c0,0.11-0.01,0.21-0.02,0.31c-0.28,3.93-1.56,6.99-3.86,9.19c-2.3,2.18-5.53,3.4-9.72,3.64c-0.09,0.01-0.17,0.02-0.26,0.02H2.83 C2.15,122.88,1.54,122.53,1.18,122.01L1.18,122.01z M45.42,39.08c2.47,5.14,9.94,5.32,12.3,0.03c-0.64-0.65-1.12-1.35-1.6-2.04 c-0.08-0.11-0.16-0.23-0.23-0.34c-1.14,0.9-2.52,1.48-4.32,1.48c-1.94,0-3.41-0.75-4.61-1.85c-0.07-0.07-0.14-0.13-0.21-0.2 c-0.17,0.48-0.39,1.05-0.62,1.58C45.89,38.25,45.65,38.73,45.42,39.08L45.42,39.08L45.42,39.08z M58.41,38.54 c2.63,1.86,9.03,2.31,11.49,3.68c0.82,0.45,1.55,1.03,2.15,1.82c1.24,1.63,3.76,7.56-0.34,7.87H64l0.95-10.62 c-2.07-0.4-4.26-0.72-6.55-2.04c-1.41,6.21-11,7.1-13.76,0.17c-2.05,1.03-4.05,1.63-6.44,1.99l1.49,10.49h-8.28 c-4.1-0.31-1.57-6.24-0.34-7.87c0.59-0.78,1.33-1.36,2.15-1.82c2.45-1.37,8.82-1.82,11.47-3.66c0.19-0.29,0.4-0.72,0.6-1.18 c0.3-0.69,0.58-1.45,0.76-1.97c-0.74-0.87-1.37-1.85-1.98-2.82l-2-3.19c-0.73-1.09-1.11-2.09-1.14-2.91 c-0.01-0.39,0.05-0.74,0.2-1.04c0.15-0.32,0.38-0.59,0.69-0.8c0.14-0.1,0.31-0.18,0.49-0.25c-0.13-1.73-0.18-3.91-0.09-5.73 c0.04-0.43,0.13-0.87,0.25-1.3c0.51-1.83,1.8-3.3,3.39-4.32c0.88-0.56,1.84-0.98,2.84-1.26c0.63-0.18-0.09-1.61,0.57-1.68 c3.18-0.33,7.88,1.98,10.1,4.38c1.11,1.2,1.81,2.8,1.96,4.91l-0.13,5.2v0c0.56,0.17,0.91,0.52,1.06,1.09 c0.16,0.63-0.01,1.52-0.55,2.74l0,0c-0.01,0.02-0.02,0.04-0.03,0.07l-2.28,3.76c-0.84,1.38-1.69,2.77-2.8,3.86 c0.1,0.14,0.2,0.29,0.3,0.44c0.45,0.66,0.91,1.33,1.49,1.92C58.38,38.5,58.4,38.52,58.41,38.54L58.41,38.54L58.41,38.54z M43.45,25.32c-0.44,0.02-0.78,0.11-1.01,0.26c-0.13,0.09-0.23,0.2-0.29,0.33c-0.07,0.15-0.1,0.33-0.09,0.54 c0.02,0.61,0.34,1.41,0.95,2.33l0.01,0.01l2,3.19c0.8,1.28,1.65,2.58,2.69,3.54c1.01,0.92,2.23,1.54,3.84,1.55 c1.75,0,3.03-0.64,4.07-1.62c1.08-1.01,1.93-2.4,2.77-3.78l2.26-3.72c0.42-0.96,0.57-1.6,0.48-1.98c-0.06-0.22-0.3-0.33-0.73-0.36 c-0.09,0-0.18-0.01-0.27,0c-0.1,0-0.21,0.01-0.32,0.02c-0.06,0.01-0.12,0-0.17-0.01c-0.2,0.01-0.41,0-0.62-0.03l0.77-3.42 c-5.74,0.9-10.03-3.36-16.1-0.85l0.44,4.03C43.9,25.36,43.67,25.35,43.45,25.32L43.45,25.32L43.45,25.32L43.45,25.32z M70.47,108.18c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h16.68c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2H70.47 L70.47,108.18z M16.82,93.62c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h70.5c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2 H16.82L16.82,93.62z M17.14,79.06c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h70c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2 H17.14L17.14,79.06z M16.82,64.5c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h30.13c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2 H16.82L16.82,64.5z M54.64,64.5c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h32.5c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2 H54.64L54.64,64.5z M99.13,109.68V3.99H21.4H3.99v114.9h85.26l0.04,0c3.21-0.18,5.61-1.04,7.2-2.55 C98.06,114.85,98.93,112.62,99.13,109.68L99.13,109.68z"/>
                              </g>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
