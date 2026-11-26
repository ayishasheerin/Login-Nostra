
import { useState } from 'react'
import nostraBanner from '../assets/images/nostra-banner.jpeg'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Login(){
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[message, setMessage] = useState('')
  function handleEmailChange(event){
    setEmail(event.target.value)
    setMessage('')
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
    setMessage('')
  }

 
async function handleSubmit(event){
  event.preventDefault()
  if (email === '' || password === ''){
    setMessage('Please fill in all fields')
    return
  }
if (!email.includes('@') || !email.includes('.')){
    setMessage('Please enter a valid email address')
    return
  }
if (password.length < 6){
    setMessage('Password must be at least 6 characters')
    return
 }
  try{
    const response = await axios.post('http://localhost:5000/login',
      {email: email,
     password: password
      })

    window.location.href = 'https://ayishasheerin.github.io/Nostra-E-Commerce-Website/'
  } catch(error){
    if (error.response){
      setMessage(error.response.data.message)
    } else {
      setMessage('Unable to connect to the server')
    }
  }
}


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-10"
    style={{padding: '20px',boxSizing: 'border-box'}} >
      <div className="w-full max-w-6xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        <div className="h-56 sm:h-72 md:h-full md:min-h-[620px]">
          <img src={nostraBanner} alt="bannerimg"  className="w-full h-full object-cover"/>
        </div>
        <div className="flex items-center justify-center px-5 py-10 sm:px-10 md:px-12 md:py-16">
<div className="w-full max-w-sm">

            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-widest mb-5">   NOSTRA</h1>

              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Welcome Back</h2>

              <p className="text-sm text-gray-500"> Sign in to your Nostra account</p>
            </div>

        
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <label className="block text-sm font-medium mb-3">  Email Address </label>

             <input type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full border border-gray-300 rounded-lg px-3 outline-none focus:border-black text-sm" style={{ height: '30px', boxSizing: 'border-box' }}
                />
              </div>

         
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3"> Password </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-lg px-3 outline-none focus:border-black text-sm"
                  style={{ height: '30px', boxSizing: 'border-box' }}
                />
              </div>

            
              <div className="flex justify-end mb-8">
                <button type="button"  className="text-sm text-gray-600 underline hover:text-black"> Forgot Password?</button>
              </div>

           <button
  type="submit"
  className="w-full bg-black text-white rounded-lg tracking-widest hover:bg-gray-800 transition"
  style={{ height: '30px' }}>SIGN IN</button>

              {message !== '' && (
                <p className="text-center text-sm text-red-600 mt-4"> {message}</p>
              )}

            </form>

        <p className="text-center text-sm text-gray-500 mt-8"> Don't have an account?
            <Link to="/signup" className="text-black font-semibold ml-1 cursor-pointer hover:underline">
  Sign Up
</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login