import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'
import CreateCard from './components/CreateCard'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'

function Mainpage({ setAuthorized, mail }) {
  const [cards, setCards] = useState([]);
  const [filteredCards, setfilteredCards] = useState([]);
  const [activeCard, setActiveCard] = useState();
  const [openModal, setOpenModal] = useState("");

  useEffect(() => {
    setfilteredCards(cards.filter((card) => card.author === mail));
  }, [cards])

  return (
    <div className={`h-screen relative ${openModal ? 'overflow-hidden' : ''}`}>
      <Navbar setAuthorized={setAuthorized} mail={mail} />
      <main className='mx-5 my-5'>

        <button
          onClick={(e) => {
            setOpenModal("create")
          }}
          className='w-full md:w-fit bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 '>Create card</button>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 px-15'>
          {filteredCards.length ? (
            filteredCards.map((card) => (
              <TodoCard key={card.id} data={card} setOpenModal={setOpenModal} setActiveCard={setActiveCard} />
            ))
          ) : (
            <p className='text-center col-span-3 mt-10'>No cards found</p>
          )

          }



        </div>
      </main>

      {openModal === "delete" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <DeleteCard activeCard={activeCard} setCards={setCards} setOpenModal={setOpenModal} />
          </div>
        )}

      {
        openModal === "create" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <CreateCard setCards={setCards} setOpenModal={setOpenModal} mail={mail} />
          </div>
        )}

      {openModal === "edit" &&
        (
          <div className='flex items-center justify-center bg-gray-900 bg-opacity-85 fixed top-0 left-0 w-full h-full '>
            <EditCard activeCard={activeCard} setCards={setCards} setOpenModal={setOpenModal} />
          </div>
        )}

    </div>
  )
}

export default Mainpage