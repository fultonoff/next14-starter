import { handleGithubLogin } from '@/libs/action';
import { auth, signIn } from '@/libs/auth'
import React from 'react'

const LoginPage = async () => {
 

  return (
    <div>
      <form action={handleGithubLogin}>
        <button className="p-4 bg-black text-white">Login with github</button>
      </form>
    </div>
  )
}

export default LoginPage