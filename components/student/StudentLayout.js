import React from 'react'
import Footer from '@/components/common/Footer'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  ClipboardDocumentCheckIcon,
  ClipboardIcon,
  ScaleIcon,
  UserMinusIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import 'react-toastify/dist/ReactToastify.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const navigation = [
  { name: 'Dashboard', href: '/student' },
  { name: 'Leave', href: '/student/leave' },
  { name: 'Mess', href: '/student/mess' },
  { name: 'Hostel', href: '/student/hostel' },
]

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '/' },
]

export default function StudentLayout({ children, title = 'Student Dashboard', current = '/student' }) {
  return (
    <>
      <div className='min-h-full'>
        <div className='bg-sky-800 pb-2'>
          <Disclosure as='nav' className='bg-sky-800'>
            {({ open }) => (
              <>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                  <div className='border-b border-sky-700'>
                    <div className='flex items-center justify-between h-16 px-4 sm:px-0'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-8 w-8'
                            src='/vercel.svg'
                            alt='Workflow'
                          />
                        </div>
                        <div className='hidden md:block'>
                          <div className='ml-10 flex items-baseline space-x-4'>
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.href == current
                                    ? 'bg-sky-900 text-white'
                                    : 'text-sky-300 hover:bg-sky-700 hover:text-white',
                                  'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                          <button
                            type='button'
                            className='bg-sky-800 p-1 text-sky-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-white'
                          >
                            <span className='sr-only'>View notifications</span>
                            <BellIcon className='h-6 w-6' aria-hidden='true' />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as='div' className='ml-3 relative'>
                            <div>
                              <Menu.Button className='max-w-xs bg-sky-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-white'>
                                <span className='sr-only'>Open user menu</span>
                                <img
                                  className='h-8 w-8 rounded-full'
                                  src={user.imageUrl}
                                  alt=''
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-100'
                              enterFrom='transform opacity-0 scale-95'
                              enterTo='transform opacity-100 scale-100'
                              leave='transition ease-in duration-75'
                              leaveFrom='transform opacity-100 scale-100'
                              leaveTo='transform opacity-0 scale-95'
                            >
                              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-sky-100' : '',
                                          'block px-4 py-2 text-sm text-sky-700'
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className='-mr-2 flex md:hidden'>
                        {/* Mobile menu button */}
                        <Disclosure.Button className='bg-sky-800 inline-flex items-center justify-center p-2 rounded-md text-sky-400 hover:text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-white'>
                          <span className='sr-only'>Open main menu</span>
                          {open ? (
                            <XCircleIcon
                              className='block h-6 w-6'
                              aria-hidden='true'
                            />
                          ) : (
                            <Bars3Icon
                              className='block h-6 w-6'
                              aria-hidden='true'
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className='border-b border-sky-700 md:hidden'>
                  <div className='px-2 py-3 space-y-1 sm:px-3'>
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-sky-900 text-white'
                            : 'text-sky-300 hover:bg-sky-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className='pt-4 pb-3 border-t border-sky-700'>
                    <div className='flex items-center px-5'>
                      <div className='flex-shrink-0'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src={user.imageUrl}
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <div className='text-base font-medium leading-none text-white'>
                          {user.name}
                        </div>
                        <div className='text-sm font-medium leading-none text-sky-400'>
                          {user.email}
                        </div>
                      </div>
                      <button
                        type='button'
                        className='ml-auto bg-sky-800 flex-shrink-0 p-1 text-sky-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-white'
                      >
                        <span className='sr-only'>View notifications</span>
                        <BellIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                    <div className='mt-3 px-2 space-y-1'>
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className='block px-3 py-2 rounded-md text-base font-medium text-sky-400 hover:text-white hover:bg-sky-700'
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className='pt-10 pb-2'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <Link href='/student'>

              <span className='text-3xl font-bold text-white'>{title}</span>
              </Link>
            </div>
          </header>
        </div>
      </div>
      <main className='bg-sky-800'>
        <div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
          <div className='rounded-lg shadow px-5 py-6 sm:px-6 bg-gray-50'>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
