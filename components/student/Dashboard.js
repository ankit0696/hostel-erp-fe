/* This example requires Tailwind CSS v2.0+ */
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
import Card from '@/components/common/Card'

const cards = [
  {
    name: 'Leave Management',
    href: 'student/leave',
    icon: ClipboardDocumentCheckIcon,
    amount: '',
  },
  {
    name: 'Mess Fee Management',
    href: 'student/messfee',
    icon: Mess,
    amount: '',
  },
  // More items...
]

export default function Dashboard() {
  return (
    <>
      {/* Replace with your content */}

        <div className='mt-8'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-lg leading-6 font-medium text-gray-900'>
              Overview
            </h2>
            <div className='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {/* Card */}
              {cards.map((card) => (
                <div
                  key={card.name}
                  className='bg-white overflow-hidden shadow rounded-lg'
                >
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* /End replace */}
    </>
  )
}
