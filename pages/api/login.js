import { API_URL } from '@/config/index'
import cookie from 'cookie'

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const strapiRes = await fetch(`${API_URL}/api/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': '*',
        },
        body: JSON.stringify(req.body),
      })
      console.log('strapiRes', strapiRes)


      if (strapiRes.ok) {
        const data = await strapiRes.json()
        const userRes = await fetch(`${API_URL}/api/users/me?populate=*`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${data.jwt}`,
          },
        })
        const user = await userRes.json()
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('token', data.jwt, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'strict',
            path: '/',
          })
        )
        if (userRes.ok) {
          res.status(200).json({ user: data.user, role: user.role.type })
        } else {
          res.status(401).json({ user: data.user, error: 'User unauthorized' })
        }
      } else {
        res
          .status(strapiRes.status)
          .json({ message: `Login failed: ${strapiRes.statusText}` })
      }
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ message: `Method ${req.method} Not Allowed` })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
}
