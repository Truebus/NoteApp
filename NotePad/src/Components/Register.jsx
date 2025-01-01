import {Link} from 'react-router-dom'

export const Register=()=>{
    return(
        <div className="p-[10px] font-serif w-full bg-gradient-to-tr from-pink-200 to-purple-300" >
            <div>
                <h1 className="text-blue-700 text-3xl text-center font-bold">To Register Here:-</h1>
                <div className="m-auto border-2 border-gray-950 rounded-3xl shadow-md shadow-gray-700 h-[400px] w-[400px] p-[10px] mt-[20px]">
                    <form className="p-[5px] flex items-start flex-col">
                      <div>
                      <label className="text-2xl font-bold text-green-700">Username:</label><br/>
                      <input type="text" placeholder="Enter Username:"
                      className="p-2 outline-none border-2 border-sky-600 shadow-md shadow-gray-700 w-[370px] rounded-lg"/>
                      </div><br/>
                      <div>
                      <label  className="text-2xl font-bold text-green-700">Email:</label><br/>
                      <input type="text" placeholder="Enter Email:"
                      className="p-2 outline-none border-2 border-sky-600 shadow-md shadow-gray-700 w-[370px] rounded-lg"/>
                      </div><br/>
                      <div>
                      <label  className="text-2xl font-bold text-green-700">Password:</label><br/>
                      <input type="text" placeholder="Enter Password:"
                      className="p-2 outline-none border-2 border-sky-600 shadow-md shadow-gray-700 w-[370px] rounded-lg"/>
                      </div>
                      <button type="button" className="bg-blue-600 mt-[20px] w-full p-1 font-bold text-white
                      shadow-md shadow-blue-400 hover:scale-105 duration-300 rounded-md">Register It!!</button>
                      <h1 className='mt-[10px] text-center m-auto'>Already have an Account? <Link to={'/login'} className='text-blue-700'>Login</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    )
}