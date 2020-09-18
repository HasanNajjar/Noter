import React from 'react'
import Logout from '../auth/Logout'

export default function Searchbar() {
    return(
        <>

        <div class="bg-purple-600 h-24 hidden lg:block ">
        <div class="container pt-4 flex flex-row">
        <input class=" h-12 w-full px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl border-2 border-gray-400" type="search" placeholder="Search..." />
        
        <div class="mx-auto"> <Logout /></div>
        </div>
        </div>

      </>
    )
}