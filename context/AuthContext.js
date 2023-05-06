import { useState, useEffect, createContext, useRef } from 'react'
import { useRouter } from 'next/router'
import { API_URL,NEXT_URL  } from '@/config/index'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [role, setRole] = useState('student')
  const [error, setError] = useState(null)
  const toastId = useRef(null);

  useEffect(() => {
    checkUserLoggedIn()
  }, [])

  //register user
  const register = async (user) => {
    const res = await fetch(`${API_URL}/api/student/register-student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (res.ok) {
      const data = await res.json()
      setUser(data)
      setRole(data.role)
      toast.success('Registration Successful!')
      // redirect after 3 seconds
      setTimeout(() => {
        router.push('/')
      }, 3000)
    } else {
      console.log('res', res)
      const data = await res.json()
      console.log('data', data)
      toast.error('Registration Failed!')
      toast.error(data?.error?.message)
    }
  }

  //login user
  const login = async ({ username: identifier, password }) => {
    toastId.current = toast.info('Logging in...')
    try {
      const res = await fetch(`${NEXT_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      })
      console.log('res', res)
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
        setRole(data.role)
        if (data.role === 'student') {
          router.push('/student')
          toast.update(toastId.current, {
            render: 'Login Successful',
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
          })
        } else if (data.role === 'admin') {
          router.push('admin/home')
          toast.update(toastId.current, {
            render: 'Login Successful',
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
          })
        } else if (data.role === 'coordinator') {
          router.push('coordinator/home')
          toast.update(toastId.current, {
            render: 'Login Successful',
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
          })
        } else {
          toast.update(toastId.current, {
            render: 'Login Failed',
            type: toast.TYPE.ERROR,
            autoClose: 3000,
          })
        }
      } else {
        // toast.error(res.statusText)
        toast.update(toastId.current, {
          render: res.statusText,
          type: toast.TYPE.ERROR,
          autoClose: 3000,
        })
      }
    }
    catch (error) {
      console.log('error', error)
      toast.update(toastId.current, {
        render: 'Login Failed',
        type: toast.TYPE.ERROR,
        autoClose: 3000,
      })
    }
  }

  //logout user
  const logout = async (user) => {
    const res = await fetch(`${NEXT_PUBLIC_FRONTEND_URL}/api/logout`, {
      method: 'POST',
    })
    if (res.ok) {
      setUser(null)
      setRole('')
      router.push('/')
    }
  }

  //check user logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      setRole(data.role)
    } else {
      setUser(null)
      setRole('')
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, checkUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
