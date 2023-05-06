import {
    AcademicCapIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

export default function Content() {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
          />
        </svg>
      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-sky-600'>
                Mission & Vision
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Eminence through Excellence
              </h1>
              <p className='mt-6 text-xl leading-8 text-gray-700'>
                The Indian Institutes of Technology (IITs) traces its origin
                with the establishment of first IIT at Kharagpur immediately
                after independence in 1952. The first prime minister of India,
                Pandit Jawaharlal Nehru, termed IITs as the temple of modern
                technological learning created to address the need and urge of
                the nation. Accordingly, when the Institutes of Technology Act,
                1961 was enacted by the Indian Parliament, the IITs were given
                the status of the Institute of National Importance.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <img
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            src='./header.jpg'
            alt=''
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <p>
                IIT Patna, commonly known as the second generation IIT, was
                established in 2008. The IITs in the country, having academic
                autonomy, are entrusted with the prime responsibility
                comprising:
              </p>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-sky-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Quality teaching and research
                    </strong>{' '}
                    The faculty members are engaged in cutting-edge research in
                    their respective fields.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <AcademicCapIcon
                    className='mt-1 h-5 w-5 flex-none text-sky-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Highly skilled
                    </strong>{' '}
                    human capacity building with core competency
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <ServerIcon
                    className='mt-1 h-5 w-5 flex-none text-sky-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Centers
                    </strong>{' '}
                    of technological innovation
                  </span>
                </li>
              </ul>
              <p className='mt-8'>
                Academic departments are actively working for quality teaching
                and research creating a place of its own in the academic arena
                nationally and internationally.
              </p>
              <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                Where is IIT Patna located?
              </h2>
              <p className='mt-6'>
                IIT Patna campus is located at Bihta which is approximately 40
                kms from Patna. For driving directions and contact details,
                please point your browser to the following link: &nbsp;
                <a
                  href='https://www.iitp.ac.in/index.php/en-us/contact?id=190'
                  className='text-sky-600 hover:text-sky-700'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.iitp.ac.in/index.php/en-us/contact?id=190
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
