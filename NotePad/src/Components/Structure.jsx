import React, { useEffect } from 'react'
import { DeleteId } from '../EndPoints/NoteApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Structure = ({ data, deletedata }) => {
  const navigate = useNavigate();
  
  const HandleDeleteData = async () => {
    await DeleteId(data._id);
    deletedata(data._id)
  }

  const handleEdit = () => {
    navigate(`/update/${data._id}`);
  };

  const HandleTxt = (txt, limit) => {
    if (txt.length > limit) {
      return txt.substring(0, limit) + '....';
    }
    return txt;
  }

  return (
    <div className='p-[10px] shadow-lg shadow-yellow-300'>
      <div className='h-[350px] w-[300px] border-2 border-gray-400 rounded-xl hover:scale-105 duration-300 ease-linear p-[10px] relative'>
        <div>
          <Link to={`/detail/${data._id}`}><h1 className='text-2xl text-center font-serif font-bold text-blue-700'>{HandleTxt(data.title, 30)}</h1></Link>
          <p className='font-serif font-medium text-base'>{HandleTxt(data.description, 300)}</p>
        </div>
        
        {/* Using flexbox to position buttons at the bottom */}
        <div className="flex gap-x-2 absolute bottom-4 w-full px-2">
          <button 
            type='button' 
            onClick={HandleDeleteData} 
            className='bg-gradient-to-tl from-slate-400 to-amber-200 p-2 text-base font-serif font-bold text-black w-[80px]'
          >
            Delete
          </button>
          <button 
            type='button' 
            onClick={handleEdit} 
            className='bg-gradient-to-tl from-slate-400 to-amber-200 p-2 text-base font-serif font-bold text-black w-[80px]'
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
