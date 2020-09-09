import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { useParams, Redirect } from 'react-router-dom';

function About({getItems, item }) {
    useEffect(() => {
        getItems()
    }, [getItems])

    const {items} = item
    const {id} = useParams()

    const displayNotebook = (id) => {
        return(
            <>
            {items.filter(item => item._id === id).map(el => (
                <>
                <div class="flex flex-col w-1/6 border-r"> 
                <div class="px-4 pt-4 pb-4 text-lg font-bold border-b bg-gray-100">  
                <div>
                {el.name}
                </div>
                <button>
                <svg viewBox="0 0 20 20" fill="currentColor" class="plus-circle w-6 h-6"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                </button>
                </div>
                <ul>
                {el.notes ? el.notes.map((notes) => (
                    <>
                    <div class="hover:bg-gray-300">
                    <div class=" pt-4 pb-4 mx-4 font-semibold border-b ">
                    <li>
                    
                    {notes.title}
                    
                    </li>
                    </div> 
                    </div>
                    </>
                )): null}
                </ul>

                </div>

                </>
            ))}
            </>
        )
    }

    return(
        <>
        {items.find(item => item._id === id) ? displayNotebook(id) : <Redirect to="/" />}
        </>
    )
}


const mapStateToProps = (state) => ({
    item: state.item,
  });
  
  export default connect(mapStateToProps, { getItems })(About);

/* 
 */