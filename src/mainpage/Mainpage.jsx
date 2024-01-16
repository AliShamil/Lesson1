import {useState} from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'
import CreateCard from './components/CreateCard'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'

function Mainpage({setAuthorized , mail}) {
  const [isCreateOpened, openCreateModal] = useState(false)
  const [isEditOpened, openEditModal] = useState(false)
  const [isDeleteOpened, openDeleteModal] = useState(false)
  return (
    <>
      <Navbar setAuthorized={setAuthorized} mail={mail}/>
      <main className='mx-8 my-5'>

      <button
            onClick={(e)=>{
              openCreateModal(true)
            }}
       className='w-full md:w-fit bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 '>Create card</button>
      <div className='flex flex-wrap px-15'>
        <TodoCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <TodoCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <TodoCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <TodoCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
      </div>
      </main>

      {isDeleteOpened && 
      (
        <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
          <DeleteCard openDeleteModal={openDeleteModal} />
        </div>
      )}
      
      {
      isCreateOpened && 
      (
        <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
          <CreateCard openCreateModal={openCreateModal} />
        </div>
      )}
      
      {isEditOpened && 
      (
        <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
          <EditCard openEditModal={openEditModal} />
        </div>
      )}
  
    </>
  )
}

export default Mainpage