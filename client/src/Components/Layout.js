import React from 'react'
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import Notebook from './Notebook';

export default function Noter() {
    return(
        <>
        <Searchbar  />
        <div class="flex flex-row">
        <Sidebar />
        <Notebook />
        </div>
        </>
    )
}