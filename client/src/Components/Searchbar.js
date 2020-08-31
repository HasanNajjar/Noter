import React from 'react'


export default function Searchbar() {
    return(
        <div class="bg-purple-600 h-24">
        <div class="container pt-4">
        <input class="w-full h-12 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl border-2 border-gray-400" type="search" placeholder="Search..." />
        </div>
        </div>
    )
}