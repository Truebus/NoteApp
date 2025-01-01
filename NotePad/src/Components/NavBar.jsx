import { Link } from "react-router-dom"

export const NavBar=()=>{
    return(
        <div>
            <div className="bg-amber-100 flex justify-around items-center text-purple-800 p-[5px] font-serif font-semibold">
                <div className="flex items-center gap-x-3">
                    <img src="src\assets\notepad.gif" alt="image not found" className="h-[40px] w-[40px] rounded-xl"/>
                    <h1>Notly</h1>
                </div>
                <h1>Freely Use NotePad</h1>
                <ul className="flex gap-x-1">
                <Link to={'/'}><li className="hover:border-2 border-slate-500 p-1 rounded-xl hover:text-red-600">Home</li></Link>
                <Link to={'/noteapp'}><li className="hover:border-2 border-slate-500 p-1 rounded-xl hover:text-red-600">Note Lists</li></Link>
                    <Link to={'/feat'}><li className="hover:border-2 border-slate-500 p-1 rounded-xl hover:text-red-600">Features</li></Link>
                    <Link to={'/register'}><li className="hover:border-2 border-slate-500 p-1 rounded-xl hover:text-red-600">Register</li></Link>
                    <Link to={'/login'}><li className="hover:border-2 border-slate-500 p-1 rounded-xl hover:text-red-600">Login</li></Link>
                </ul>
            </div>
        </div>
    )
}