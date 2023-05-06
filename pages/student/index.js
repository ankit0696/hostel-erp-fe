import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from "@/components/student/Dashboard";
import StudentLayout from '@/components/student/StudentLayout';



export default function Home() {
  return (
    <StudentLayout>
      <Dashboard />
    </StudentLayout>
  )
}
