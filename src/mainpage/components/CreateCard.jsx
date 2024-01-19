import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function CreateCard({dispatch, setCards,mail}) {
  const [formData, setFormData] = useState({});
  const handleChange = (e) =>{
    const {name ,value} = e.target;
    setFormData((prevForm)=> ({
      ...prevForm,
      [name]:value,
      author: mail,
      id: uuidv4(),
    }));
  };

  const createCard = (e) =>{
    e.preventDefault();
    setCards((prevValue) => [...prevValue, formData]);
    console.log(formData)
    dispatch({ type: "reset" });
  };
  return (
    <>
     <form action="" className='flex flex-col items-center w-screen h-screen md:w-[700px] md:h-[350px] justify-center md:rounded-[13px] bg-white relative'>
        <div className='w-[100%]'>
            <button className='w-4 h-4 bg-red-600 rounded-full absolute top-[10px] right-[10px]' 
            onClick={()=>{
              dispatch({ type: "reset" });
              }}></button>
        </div>
          <h1 className='text-3xl font-bold mb-5'>CREATE CARD</h1>
          <div className='flex flex-col w-[80%] text-center sm:text-left'>
            <label htmlFor="" className='text-zinc-600 text-lg'>Title:</label>
            <input required 
            name='title' 
            onChange={(e)=>handleChange(e)}
              className='border border-zinc-300  my-3 h-[40px] p-1 rounded-[6px]'
            />
            <label htmlFor="" className='text-zinc-600 text-lg'>Description:</label>
            <input 
              name='description'
              required 
              onChange={(e)=>handleChange(e)}
              className='border border-zinc-300 rounded-[6px] my-3 h-[40px] p-1'
            />
            <div className='flex  h-[20%] md:justify-end  justify-center items-center mt-[10px]'>
              <button className='border border-zinc-200 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
              onClick={()=>{
                dispatch({ type: "reset" });
              }}>Close</button>
              <button onClick={(e) =>{
                createCard(e);
              }} className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-3 hover:bg-[#F6AB1A]'>Create</button>
            </div>
          </div>
        </form>
    </>
  )
}