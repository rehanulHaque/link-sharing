import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLinkContext } from "../Context/LinkContext"

const Login = () => {
  const [email, setemail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {loginUser} = useLinkContext()
  const navigate = useNavigate()

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault()
    loginUser({email, password}).then((data) => {
      if(data){
        localStorage.setItem('userData', JSON.stringify(data))
        navigate('/home')
      }
    })
  }
  return (
    <main>
      <form className="max-w-md mx-auto mt-16" onSubmit={handelSubmit}>
        <h1 className="text-center font-bold text-2xl mb-4">Login to your account</h1>
        <div>
          <label htmlFor="email" className="block text-sm">Email</label>
          <input type="text" name="email" id="email" className="border border-b-black w-full my-4 px-4 py-3 shadow-sm outline-none rounded-md" value={email} onChange={(e) => setemail(e.target.value)}  />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm">Password</label>
          <input type="text" name="password" id="password" className="border border-b-black w-full my-4 px-4 py-3 shadow-sm outline-none rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="w-full bg-black text-white py-3 rounded-md">Login</button>
        <p className="text-center mt-3">Don't have an account? <Link to={'/signup'} className="text-blue-900 underline">Sign up</Link></p>
      </form>
    </main>
  )
}

export default Login
