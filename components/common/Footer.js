import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_SOCIAL,
  COMPANY_TAGLINE,
} from '@/config/index.js'
import { AtSymbolIcon, ExclamationCircleIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  legal: [

    { name: 'Privacy Policy', href: 'legal/privacy-policy' },
    { name: 'Terms', href: 'legal/terms' },
    { name: 'Refund Policy', href: 'legal/refund-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-sky-900' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <Image
              className='h-20'
              width={80}
              height={80}
              src='/vercel.svg'
              alt={`${COMPANY_NAME} logo`}
            />
            {/* Company Name as header */}
            <p className='text-2xl font-bold tracking-widest text-white sm:text-3xl'>
              {COMPANY_NAME}
            </p>

            <p className='text-sky-200 text-base'>{COMPANY_TAGLINE}</p>
            <div className='flex space-x-6'>
              {COMPANY_SOCIAL.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sky-200 hover:text-sky-100'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          <div className='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              {/* Company address */}
              <div>
                <h3 className='text-sm font-semibold text-sky-400 tracking-wider uppercase'>
                  Address
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  <li className='text-base text-sky-200'>
                    <span className='sr-only'>Address</span>
                    {COMPANY_ADDRESS}
                  </li>
                </ul>
              </div>
              {/* Company contact */}
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-sky-400 tracking-wider uppercase'>
                  Contact
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                    {/* Inline icon*/}
                  <li className='text-base text-sky-200'>
                    <span className='sr-only'>Phone number</span>
                    <PhoneIcon className='h-6 w-6 inline-block mr-1' aria-hidden='true' />
                    {COMPANY_PHONE}
                  </li>
                  <li className='text-base text-sky-200'>
                    <span className='sr-only'>Email</span>
                    <AtSymbolIcon className='h-6 w-6 inline-block mr-1' aria-hidden='true' />
                    {COMPANY_EMAIL}
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-sky-400 tracking-wider uppercase'>
                  Legal
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-base text-sky-200 hover:text-sky-100'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-sky-200 pt-8'>
          <p className='text-base text-sky-400 xl:text-center'>{`© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`}</p>
          <p className='text-base text-sky-400 xl:text-center'>
            Built with ❤️ by{' '}
            <a
              href='https://www.linkedin.com/in/ankitiitpatna/'
              className='text-base text-sky-400 xl:text-center'
            >
              Ankit Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
