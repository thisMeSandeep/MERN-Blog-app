import { SignUp } from "@clerk/clerk-react"


const Register = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <SignUp signInUrl="/login" />
    </div>
  )
}

export default Register