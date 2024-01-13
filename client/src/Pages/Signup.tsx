import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { useLinkContext } from "../Context/LinkContext"

const Signup = () => {
    const [email, setemail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {registerUser} = useLinkContext()
  
    const handelSubmit = (e: FormEvent) => {
      e.preventDefault()
      registerUser({name, email, password}).then((data) => console.log(data))
    }
    return (
      <main>
        <form className="max-w-md mx-auto mt-16" onSubmit={handelSubmit}>
          <h1 className="text-center font-bold text-2xl mb-4">Sign up to your account</h1>
          <div>
            <label htmlFor="name" className="block text-sm">Name</label>
            <input type="text" name="name" id="name" className="border border-b-black w-full my-4 px-4 py-3 shadow-sm outline-none rounded-md" value={name} onChange={(e) => setName(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">Email</label>
            <input type="text" name="email" id="email" className="border border-b-black w-full my-4 px-4 py-3 shadow-sm outline-none rounded-md" value={email} onChange={(e) => setemail(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm">Password</label>
            <input type="text" name="password" id="password" className="border border-b-black w-full my-4 px-4 py-3 shadow-sm outline-none rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md">Login</button>
          <p className="text-center mt-3">Already have an account? <Link to={'/login'} className="text-blue-900 underline">Login</Link></p>
        </form>
      </main>
    )
}

export default Signup
