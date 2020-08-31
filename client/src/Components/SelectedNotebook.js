import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { useParams } from 'react-router-dom';

function About({getItems, item, }) {
    useEffect(() => {
        getItems()
    }, [getItems])

    const errorMsg = "Failed to display items"
    const {items} = item
    const {id} = useParams()

    const displayNotebook = (id) => {
        return(
            <>
            {items.filter(item => item._id == id).map(el => (
                <>
                <div class="flex flex-col w-1/6 border-r">
                <div class="px-4 pt-4 pb-4 text-lg font-bold border-b bg-gray-100">
                {el.name}
                </div>
                <div>
                </div>
                <div>
                
                Project 123</div>
                </div>

                </>
            ))}
            </>
        )
    }

    return(
        <>
        {items.find(item => item._id == id) ? displayNotebook(id) : errorMsg}
        </>
    )
}


const mapStateToProps = (state) => ({
    item: state.item,
  });
  
  export default connect(mapStateToProps, { getItems })(About);

/* 
 */