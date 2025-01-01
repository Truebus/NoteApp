import React, { useEffect, useState } from 'react'
import { Fetch } from '../EndPoints/NoteApi';
import { Structure } from './Structure';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';

export const MapData = () => {
    const[notedata,setNoteData] = useState([]);
    const[loading,setLoading] = useState(true);
    const HandleData=async()=>{
       try{
        const data = await Fetch();
        setNoteData(data);
       }
       catch(err){
        console.log('error in lading');
       }
       finally{
        setLoading(false);
       }
    }
    useEffect(()=>{
        HandleData();
    })

    const HandleDelete=(id)=>{
      setNoteData(prevdata=>prevdata.filter(x=>x._id!==id));
    }
  return (
    <div>
       {loading ? (
        <div className='flex flex-wrap justify-around p-[10px]'>
        <div>
            <Skeleton height={300} width={300} />
          </div>
          <div>
            <Skeleton height={300} width={300} />
          </div>
          <div>
            <Skeleton height={300} width={300} />
          </div>
        </div>
       ): (
        <div className='flex flex-wrap justify-around p-[10px]'>
        {notedata.length>=0 ?(
          notedata.map((x)=>(
              
                  <div key={x._id} className='mb-[30px]'>
                      <Structure data={x} deletedata={HandleDelete}/>
                  </div>
              
          ))
        ):(
          <p className='text-4xl text-center'>not available</p>
        )}
      </div>
       )}
    </div>
  )
}
