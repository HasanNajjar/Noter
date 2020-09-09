import React from 'react'

export default function Notebook() {
    return (
        <>
        <div class="flex flex-col w-1/6 border-r">
        <div class="px-4 pt-4 pb-4 text-lg font-bold border-b bg-gray-100">
        <div>
        Notes
        </div>
        <button>
        <svg viewBox="0 0 20 20" fill="currentColor" class="plus-circle w-6 h-6"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
        </div>
        </>
    )
}