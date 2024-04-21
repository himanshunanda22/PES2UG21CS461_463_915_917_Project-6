import LoginForm  from './login'
import Link from 'next/link'
export default function Login () {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-4 ">
        <div className="   lg:w-1/3  space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Enter your information to login to your account
        </p>
      </div>
            <LoginForm/>
            <div className="mt-4 text-center text-sm">
        Do not have an account?
        <Link className=" mx-1 underline" href="/signup">
          Sign up
        </Link>
      </div>
    </div>

        </main>
        
    )

}