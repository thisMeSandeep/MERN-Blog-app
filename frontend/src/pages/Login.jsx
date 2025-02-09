import { SignIn } from "@clerk/clerk-react"


const Login = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <SignIn signUpUrl="/register"/>
    </div>
  )
}

export default Login