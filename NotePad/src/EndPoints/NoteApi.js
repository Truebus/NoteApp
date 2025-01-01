import axios from "axios";

const BASE_URL = "http://localhost:7000";

const noteapi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const Create = async(noteapp)=>{
       try{
          const response = await noteapi.post('/api/noteapp/create',noteapp);
          return response.data;
       }
       catch(err){
        console.log('internal error in creating');
        return err;
       }
}

export const Fetch = async()=>{
    try{
       const data = await noteapi.get('/api/noteapp/getall');
       return data.data;
    }
    catch(err){
        console.log('internal error in fetch data');
    }
}

export const FetchId = async(id)=>{
    try{
       const data = await noteapi.get(`api/noteapp/getId/${id}`);
       return data.data;
    }
    catch(err){
        console.log('internal error in fetch id');
        return err;
    }
}

export const Delete = async()=>{
    try{
       const data = await noteapi.delete('api/noteapp/deleteall');
       return data.data;
    }
    catch(err){
        console.log('error in deleting data')
    }
}

export const DeleteId = async(id)=>{
    try{
       const data = await noteapi.delete(`api/noteapp/delId/${id}`);
       return data.data;
    }
    catch(err){
        console.log('internal error in delete by id');
    }
}

export const Update = async(id,noteapp)=>{
    try{
      const data = await noteapi.put(`api/noteapp/update/${id}`,noteapp);
      return data.data;
    }
    catch(err){
        console.log('internal error in updating');
    }
}