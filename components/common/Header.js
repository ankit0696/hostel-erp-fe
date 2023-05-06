import { COMPANY_NAME } from '@/config';
import Link from 'next/link';

/* This example requires Tailwind CSS v2.0+ */
export default function Header() {
    return (
      <div className="bg-sky-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Student Information System</span>
            <span className="block">{COMPANY_NAME}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-sky-200">
            Welcome to the Student Information System of {COMPANY_NAME}.
          </p>
          <Link
            href="/account/login"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-sky-50 sm:w-auto"
          >
            Log in
          </Link>
        </div>
      </div>
    )
  }
  