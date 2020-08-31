import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { Link, useParams } from 'react-router-dom';

function SidebarNotebooks({
    getItems,
    item,
    deleteItem}) {
        useEffect(() => {
            getItems()
        }, [getItems])

    const {items} = item

    return(
        <>
        {items.map(({_id, name})=> (
            <>
            <Link 
            to={`/notebook/${_id}`}
            >
            <div 
            class="hover:bg-gray-300">
            <div class=" pt-4 pb-4 mx-4 font-semibold border-b ">
            {name} 
            </div>
            </div>
            </Link>
            </>
        ))}
        </>
        
    )
}
    

const mapStateToProps = (state) => ({
    item: state.item,
  });
  
  export default connect(mapStateToProps, { getItems, deleteItem })(SidebarNotebooks);

/* 
 function Notebooks() {
    return(
        <div>
        <div class="bg-gray-300 border-r-4  border-purple-600">
        <div class=" pt-4 pb-4 mx-4 font-semibold border-b ">
        Notebook 1
        </div>
        </div>
        <div class="hover:bg-gray-300">
        <div class=" pt-4 pb-4 mx-4 font-semibold border-b ">
        Notebook 2
        </div>
        </div>
        </div>
        
    )
} */