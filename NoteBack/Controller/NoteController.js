import NotePad from "../Model/NoteModel.js"; // Make sure to use .js extension

export const Create = async (req, res) => {
    // Implement create logic
    try{
        const newnote = new NotePad(req.body);
    const savenote = await newnote.save();
    res.status(201).json(savenote);
    }
    catch(err){
        res.status(404).json({creating:"backend error in creating"});
    }
};

export const GetAll = async(req,res)=>{
    try{
      const findnote = await  NotePad.find();
      if(!findnote){
        res.status(404).json({message:"noteapp data is not found"});
      }
      res.status(200).json(findnote);
    }
    catch(err){
     res.status(404).json({message: "internal error in gettting all data"});
    }
}

export const GetId = async(req,res)=>{
   try{
    const {id} = req.params;
    const getId = await NotePad.findById(id);
    if(!getId){
        res.status(404).json({message: "Id is not found"});
    }
    res.status(200).json(getId);
   }
   catch(err){
    console.log(err.message);
   }
}

export const DeleteAll = async(req,res)=>{
    try{
       const detealldata = await NotePad.deleteMany({});
       res.status(200).json(detealldata)
    }
    catch(err){
        console.log("error in deleting all data",err.message);
    }
}

export const DeleteId = async(req,res)=>{
    try{
        const {id} = req.params;
       const delId = await NotePad.findByIdAndDelete(id);
       if(!delId){
        res.status(404).json({message: 'something problem in deleting data by id'});
       }
       res.status(200).json(delId);
    }
    catch(err){
        console.log(err.message);
    }
}

export const Update = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;
       const updatedata = await NotePad.findByIdAndUpdate(id,{title,description},{new:true});
       if(!updatedata){
        res.status(404).json({message: "problem in updating data"});
       }
       res.status(200).json(updatedata);
    }
    catch(err){
        console.log(err.message)
    }
}