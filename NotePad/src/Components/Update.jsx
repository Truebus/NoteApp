import { useEffect, useState } from "react"
import { Create, Fetch, FetchId, Update} from "../EndPoints/NoteApi";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateForm=()=>{
    const {id} = useParams();
    
    const[title,setTitle] = useState('');
    const[description,setDescription] = useState('');
    const navigate = useNavigate();
    const handleData=async(e)=>{
          e.preventDefault();
        const newdata =  {title,description};
        const createnote = await Update(id,newdata);
        if(createnote){
            setTitle('');
            setDescription('');
            navigate('/noteapp')
        }
    }

    useEffect(()=>{
        const HandleFetchId=async()=>{
            const data = await FetchId(id);
            setTitle(data.title);
            setDescription(data.description);
        }
        HandleFetchId()
    },[id])
    
    return(
        <div className="flex  justify-around p-[10px] bg-gradient-to-tr from-slate-400 to-red-300">
            <form onSubmit={handleData}>
                <div>
                    <label className="text-3xl font-serif font-semibold">Title:</label><br/>
                    <input type="text" placeholder="Enter Title Here" value={title} onChange={(e)=>setTitle(e.target.value)}
                    className="border-2 border-sky-800 w-full mt-[10px] p-2 rounded-xl font-semibold
                    outline-none shadow-md shadow-gray-700"/>
                </div>
                <div className="mt-[25px]">
                <h1 className="text-3xl font-serif font-semibold">Note Content:</h1>
                    <textarea rows={20} cols={130} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Note Content" className="border-2 border-sky-800 outline-none shadow-lg shadow-gray-900 p-2 rounded-xl font-semibold mt-[10px]"></textarea>
                </div>
               <div className="inline-flex gap-x-3 mt-[10px]">
              <img src=" https://c8.alamy.com/comp/2XB3W5W/young-girl-back-turned-happily-gazing-sideways-in-charming-illustration-2XB3W5W.jpg" alt="no match"
              className="h-[60px] w-[60px] animate-bounce rounded-lg"/>
               <button type="submit" className="bg-blue-500 rounded-xl p-2 w-[100px] text-white animate-pulse hover:scale-105 duration-300 font-serif font-bold text-2xl">Update</button>
               </div>
            </form>
        </div>
    )
}