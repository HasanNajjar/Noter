import React, { useState }  from 'react'
import SidebarNotebooks from './SidebarNotebooks'

import CreateNotebook from './CreateNotebook'

export default function Sidebar() {
    return(
        <div class="w-1/6 h-screen min-h-full bg-gray-100 border-r">
          <div class="flex flex-col">
            <div class="mb-6 mt-4 pt-5">
            </div>  
          <div class="px-4 flex flex-col">
            <CreateNotebook />    
            <button class="text-black py-2 m-2 bg-gray-100 px-10 rounded border-2 border-gray-400 cursor-not-allowed">
            New Project
            </button>
          </div>
         </div>
         <div class="px-4 pt-16 pb-4 text-lg font-bold ">
          Hasan's Notebooks
         </div>
        <SidebarNotebooks />
      </div>
    )
}