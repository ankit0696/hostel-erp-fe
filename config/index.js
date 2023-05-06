export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'

export const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME || 'Company Name'

export const COMPANY_TAGLINE =
  process.env.NEXT_PUBLIC_COMPANY_TAGLINE || 'Company Tagline'

export const COMPANY_ADDRESS =
  process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Company Address'

export const COMPANY_EMAIL =
  process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'Company Email'

export const COMPANY_PHONE =
  process.env.NEXT_PUBLIC_COMPANY_PHONE || 'Company Phone'

export const COMPANY_SOCIAL = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/iitp.ac.in/',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/IITPAT',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          xmlns='http://www.w3.org/2000/svg'
          d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533c2.987,0,3.539,1.966,3.539,4.522V22z'
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/c/iitpatna',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M21.5 7.5c-.3-1.1-1.1-2-2.2-2.3C17.7 5 12 5 12 5s-5.7 0-7.3.2c-1.1.3-1.9 1.2-2.2 2.3C2 9.3 2 12 2 12s0 2.7.2 4.3c.3 1.1 1.1 2 2.2 2.3C6.3 19 12 19 12 19s5.7 0 7.3-.2c1.1-.3 1.9-1.2 2.2-2.3.2-1.6.2-4.3.2-4.3s0-2.7-.2-4.3zM9.5 15V9l5.5 3-5.5 3z' />
      </svg>
    ),
  },
]
