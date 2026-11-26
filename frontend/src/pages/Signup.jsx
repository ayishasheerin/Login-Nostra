
import { useState } from 'react'
import nostraBanner from '../assets/images/nostra-banner.jpeg'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

 async function handleSubmit(event) {
  event.preventDefault()

  if (!name || !email || !password || !confirmPassword) {
    setMessage('Please fill in all fields')
    return
  }

  if (!email.includes('@') || !email.includes('.')) {
    setMessage('Please enter a valid email')
    return
  }

  if (password.length < 6) {
    setMessage('Password must be at least 6 characters')
    return
  }

  if (password !== confirmPassword) {
    setMessage('Passwords do not match')
    return
  }

  try {
    const response = await axios.post('https://signin-nostra.vercel.app/signup', {
      name: name,
      email: email,
      password: password
    })

    setMessage(response.data.message)
  } catch (error) {
    if (error.response) {
      setMessage(error.response.data.message)
    } else {
      setMessage('Unable to connect to the server')
    }
  }
}

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      style={{ padding: '20px', boxSizing: 'border-box' }} >
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

   
        <div className="h-56 sm:h-72 md:h-full md:min-h-[620px]">
          <img src={nostraBanner}alt="bannerimg" className="w-full h-full object-cover"
          />
        </div>

      
        <div className="flex items-center justify-center px-5 py-10 sm:px-10 md:px-12 md:py-16">
          <div className="w-full max-w-sm">

            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-widest mb-4">NOSTRA</h1>

              <h2 className="text-2xl font-semibold mb-2">Create Account </h2>
<p className="text-sm text-gray-500">Join the Nostra community</p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2"> Full Name  </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={function (event) {
                    setName(event.target.value)
                    setMessage('')
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 outline-none focus:border-black text-sm"
                  style={{ height: '30px', boxSizing: 'border-box' }}/>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2"> Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={function (event) {
                    setEmail(event.target.value)
                    setMessage('')
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 outline-none focus:border-black text-sm"
                  style={{ height: '30px', boxSizing: 'border-box' }}/>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2"> Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={function (event) {
                    setPassword(event.target.value)
                    setMessage('')
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 outline-none focus:border-black text-sm"
                  style={{ height: '30px', boxSizing: 'border-box' }}/>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Confirm Password </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={function (event) {
                    setConfirmPassword(event.target.value)
                    setMessage('')
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 outline-none focus:border-black text-sm"
                  style={{ height: '30px', boxSizing: 'border-box' }}/>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-lg tracking-widest hover:bg-gray-800 transition"
                style={{ height: '30px' }}>
                CREATE ACCOUNT
              </button>

              {message !== '' && (
                <p className="text-center text-sm text-red-600 mt-4"> {message}</p>
              )}

            </form>
  <p className="text-center text-sm text-gray-500 mt-7">
              Already have an account?
<Link to="/"  className="text-black font-semibold ml-1 hover:underline">Sign In</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
