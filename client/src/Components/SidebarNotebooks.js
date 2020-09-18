import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { Link, Redirect } from 'react-router-dom';

function SidebarNotebooks({ getItems, item, deleteItem}) {
        useEffect(() => {
            getItems()
        }, [getItems])

    const onClickDelete = (id) => {
        deleteItem(id)

    }
    const {items} = item
    

    return(
        <>
        {items.map(({_id, name})=> (
            <>
            <Link 
            to={`/Noter/notebook/${_id}`}
            >
            <div class="hover:bg-gray-300 flex flex-col ">
            <div class=" pt-4 pb-4 mx-4 font-semibold border-b flex-col">
            {name} 
            </div>
            </div>
            </Link>

            <button onClick={()=>onClickDelete(_id)}> 
            <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-6 h-6 "><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>   
            </button>


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