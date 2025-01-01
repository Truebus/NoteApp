import { useEffect, useState } from "react";
import { Create, Fetch } from "../EndPoints/NoteApi";

export const Home = () => {
  const [notedata, setNoteData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const[alerttype,setAlertType] = useState('')

  const handleData = async (e) => {
    e.preventDefault();

    // Reset error state before validating
    let validate = {};

    // Validate input fields
    if (!title.trim()) {
      validate.title = 'Title is Required';
    }
    if (!description.trim()) {
      validate.description = 'Description is Required';
    }

    // If there are errors, don't proceed with submission
    if (Object.keys(validate).length > 0) {
      setError(validate);
      return;
    }

    try {
      const newdata = { title, description };
      const createnote = await Create(newdata);

      if (createnote) {
        setMessage('Note Created Successfully!!')
        setTitle('');
        setDescription('');
        setNoteData((prevdata) => [...prevdata, createnote]);
        setError({}); // Clear errors on successful submit
        setTimeout(()=>{
            setMessage('');
        },3000)
      }
    } catch (err) {
      console.log('Error creating note:', err);
      setMessage('Failed to Create Notes,Please try again later!!')
      setTimeout(()=>{
        setMessage('')
      },3000)
    }
  };

  useEffect(() => {
    const GetAllData = async () => {
      try {
        const getdata = await Fetch();
        setNoteData(getdata);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };

    GetAllData();
  }, []);

  return (
    <div>
    <div>
    {message && (
        <div style={{color: alerttype==='success'?'green':'red'}} className="text-3xl text-center bg-amber-200 p-2  font-serif font-bold">
            <h1>{message}</h1>
        </div>
    )}
</div>
<div className="flex justify-around p-[10px] bg-gradient-to-tr from-slate-400 to-red-300">
      <form onSubmit={handleData}>
        <div>
          <label className="text-3xl font-serif font-semibold">Title:</label><br />
          {error.title && <p className="text-red-700 text-base font-semibold font-serif">{error.title}</p>}
          <input
            type="text"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => { setError({ ...error, title: '' }); setTitle(e.target.value); }}
            className="border-2 border-sky-800 w-full mt-[10px] p-2 rounded-xl font-semibold outline-none shadow-md shadow-gray-700 hover:scale-105 duration-500"
          />
        
        </div>

        <div className="mt-[25px]">
            
          <h1 className="text-3xl font-serif font-semibold">Note Content:</h1>
          {error.description && <p className="text-red-700 text-base font-semibold font-serif">{error.description}</p>}
          <textarea
            rows={20}
            cols={130}
            value={description}
            onChange={(e) => { setError({ ...error, description: '' }); setDescription(e.target.value); }}
            placeholder="Note Content"
            className="border-2 border-sky-800 outline-none shadow-lg shadow-gray-900 p-2 rounded-xl font-semibold mt-[10px]"
          />
          {/* {error.description && <p className="text-red-700 text-base font-semibold font-serif">{error.description}</p>} */}
        </div>

        <div className="inline-flex gap-x-3 mt-[10px]">
          <img
            src="https://c8.alamy.com/comp/2XB3W5W/young-girl-back-turned-happily-gazing-sideways-in-charming-illustration-2XB3W5W.jpg"
            alt="no match"
            className="h-[60px] w-[60px] animate-bounce rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-xl p-2 w-[100px] text-white animate-pulse hover:scale-105 duration-300 font-serif font-bold text-2xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
</div>
    
  );
};
