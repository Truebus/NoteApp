import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { FetchId } from "../EndPoints/NoteApi";
import { Link } from "react-router-dom";
import { LuLoader } from "react-icons/lu";


export const Detail=()=>{
    const {id} = useParams();
    const[storedata,setStoreData] = useState(null);
    const[IsLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        const HandleData=async()=>{
            try{
                const data = await FetchId(id);
            setStoreData(data);
            }
            catch(err){
                console.log('error');
            }
            finally{
                setIsLoading(false)
            }
        }
        HandleData();
    },[id])
    return(
        <div className="p-[10px] bg-gradient-to-tl from-amber-200 to-slate-400">
           {IsLoading ? (
            <div className="flex h-[400px] w-full justify-center items-center">
              <h1><LuLoader className="text-5xl font-extrabold"/></h1>
            </div>
           ) : (
            <div>
                <div>
            <h1 className="text-4xl animate-pulse text-blue-900 bg-gray-200 shadow-lg shadow-red-600 font-serif font-bold text-center">Welcome To Detail Page</h1>
        </div>
        <div className="mt-[20px]">
         {storedata ?(
            <div>
                <Link to={'/noteapp'}><h1 className="text-xl font-serif font-semibold text-blue-700">Back to Previous Page</h1></Link>
                <h1 className="text-center text-3xl font-serif font-semibold">{storedata.title}</h1>
                <p className="text-base font-serif">{storedata.description}</p>
            </div>
         ):(
            <p>not available</p>
         )}
        </div>
            </div>
           )}
        </div>
    )
}