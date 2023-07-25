'use client'

import { useSession, signOut } from 'next-auth/react'

const dashboard = () => {
    const { data:session } = useSession()
    if (session) {
  return (
    <>
  
    <div className='ml-3 text-sm text-stone-100 flex gap-x-5'>
        <h1>angemeldet</h1>
        <p>{session?.user?.email}</p>
        <button  className='w-36 bg-slate-500 rounded-xl text-white hover:border hover:bg-white hover:text-amber-600 hover:border-amber-600' onClick={() => signOut()}>Sign Out</button>
    </div>
    </>
  
)
}
}
export default dashboard