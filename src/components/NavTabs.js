// import React from 'react';

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}
//           // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;





/* This example requires Tailwind CSS v2.0+ */
// import React from 'react';
// import { Disclosure} from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'

// const navigation = [
//   { name: 'Home', href: '#home', current: false },
//   { name: 'About', href: '#about', current: false },
//   { name: 'Portfolio', href: '#portfolio', current: false },
//   { name: 'Contact', href: '#contact', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function NavTabs({ currentPage, handlePageChange}) {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-between h-16">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

//                 <div className="hidden sm:block sm:ml-6">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                       onClick={() => handlePageChange(item.name)}
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'px-3 py-2 rounded-md text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </Disclosure>
//   )
// }






/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import React from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Portfolio', href: '#portfolio', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavTabs({  handlePageChange }) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        onClick={() => handlePageChange(item.name)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                onClick={() => handlePageChange(item.name)}
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}




