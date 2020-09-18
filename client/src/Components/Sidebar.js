import React  from 'react'
import SidebarNotebooks from './SidebarNotebooks'
import CreateNotebook from './CreateNotebook'
import { connect } from 'react-redux';

 function Sidebar({auth}) {
    return(
      
        <div class="lg:w-1/6 h-screen min-h-full bg-gray-100 border-r">
          <div class="flex flex-col">
            <div class="mb-6 mt-4 pt-5">
            </div>

            {/* fullscreen layout */}
          <div class="px-4 flex flex-col">
            <CreateNotebook />    
        {/*     <CreateNote /> */}
          </div>
         </div>
         <div class="lg:px-4 lg:pt-16 pb-4 text-lg lg:font-bold ">
          {auth && auth.user ? `${auth.user.name}` + "'s notebook" : null }
         </div>
        <SidebarNotebooks />
      </div>
    )
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Sidebar);