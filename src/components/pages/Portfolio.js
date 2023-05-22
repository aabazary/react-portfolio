const people = [
  {
    name: 'World of Ascension',
    role: 'A game using the MERN stack to progress a character into a true Master of the Magical Arts',
    imageUrl:
      'https://live.staticflickr.com/65535/52916071739_d4eba0ee60_b.jpg',
    gitHubUrl: 'https://github.com/aabazary/Project2',
    deployedUrl: 'https://world-of-ascension.onrender.com/',
  },
  {
    name: 'Budget Tracker',
    role: 'An App that allows you to track your Budget online and offline',
    imageUrl:
      'https://live.staticflickr.com/65535/51632473790_96e5540da2_b.jpg',
    gitHubUrl: 'https://github.com/aabazary/budget_tracker',
    deployedUrl: 'https://budget-tracker-sfll.onrender.com',
  },
  {
    name: 'Fitness Tracker',
    role: 'An App that allows you to track your fitness progress',
    imageUrl:
      'https://live.staticflickr.com/65535/51630798192_38a83629b5_k.jpg',
    gitHubUrl: 'https://github.com/aabazary/workout-tracker',
    deployedUrl: 'https://fast-badlands-44381.herokuapp.com/',
  },
  {
    name: 'Inspiration Station',
    role: 'An App that allows you to track your fitness progress',
    imageUrl:
      'https://live.staticflickr.com/65535/51635407834_d4a07a2bfe_z.jpg',
    gitHubUrl: 'https://github.com/JoeyFitz/First-Team-Project',
    deployedUrl: 'https://joeyfitz.github.io/First-Team-Project/',
  },

  
  {
    name: 'Day Planner',
    role: 'An App that allows you to track your fitness progress',
    imageUrl:
      'https://live.staticflickr.com/65535/51633932762_a1deaa62f5_b.jpg',
    gitHubUrl: 'https://github.com/aabazary/day_planner',
    deployedUrl: 'https://aabazary.github.io/day_planner/',
  },


 {
    name: 'Weather Dashboard',
    role: 'An App that allows you to track your fitness progress',
    imageUrl:
      'https://live.staticflickr.com/65535/51635407994_784b44931c_b.jpg',
    gitHubUrl: 'https://github.com/aabazary/weather_dashboard',
    deployedUrl: 'https://aabazary.github.io/weather_dashboard/',
  }
]

export default function Portfolio() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-gray-100 tracking-tight sm:text-4xl">Check Out my Projects</h2>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto sm:max-w-30 " src={person.imageUrl} alt="" />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-indigo-400">{person.role}</p>
                    </div>

                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a target="_blank " href={person.gitHubUrl} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">GitHub</span>
                          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" rel="noreferrer" href={person.deployedUrl} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Deployed Site</span>
                          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor"  viewBox="0 0 490 490">
                          <g>
                            <path d="M445.06,154.352C410.115,77.368,333.233,26.827,248.63,25.425c-87.761-1.454-167.512,49.093-203.714,128.93
                              C19.6,157.729,0,179.451,0,205.675v78.647c0,26.227,19.604,47.95,44.924,51.321C80.517,414.166,158.449,464.605,245,464.605
                              c86.558,0,164.489-50.435,200.077-128.963c25.319-3.371,44.923-25.094,44.923-51.32v-78.647
                              C490,179.443,470.387,157.716,445.06,154.352z M248.32,44.113c74.364,1.232,142.218,43.957,175.786,109.772H65.871
                              C100.599,85.593,171.068,42.833,248.32,44.113z M245,445.915c-76.138,0-144.986-42.66-179.12-109.803h358.24
                              C389.989,403.255,321.144,445.915,245,445.915z M471.31,284.322c0,18.252-14.848,33.1-33.1,33.1H51.79
                              c-18.252,0-33.1-14.848-33.1-33.1v-78.647c0-18.252,14.848-33.1,33.1-33.1h386.42c18.252,0,33.1,14.848,33.1,33.1V284.322z"/>
                            <polygon points="135.931,258.049 120.134,209.152 98.323,209.152 82.526,258.049 66.729,209.152 43.403,209.152 70.936,290.094 
                              94.252,290.094 109.302,246.011 124.195,290.094 147.667,290.094 175.2,209.152 151.728,209.152 	"/>
                            <polygon points="271.634,258.049 255.837,209.152 234.026,209.152 218.228,258.049 202.432,209.152 179.106,209.152 
                              206.639,290.094 229.955,290.094 245.005,246.011 259.898,290.094 283.369,290.094 310.903,209.152 287.431,209.152 	"/>
                            <polygon points="407.337,258.049 391.539,209.152 369.729,209.152 353.931,258.049 338.135,209.152 314.809,209.152 
                              342.342,290.094 365.658,290.094 380.708,246.011 395.601,290.094 419.072,290.094 446.605,209.152 423.134,209.152 	"/>
                          </g> 
                          </svg>
                          
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
