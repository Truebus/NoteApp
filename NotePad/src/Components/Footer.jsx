import { Link } from "react-router-dom"

export const Footer=()=>{
    return(
        <div className="w-full p-[10px] flex items-center justify-around flex-col bg-slate-300">
            <div className="">
                <img src="https://as2.ftcdn.net/v2/jpg/03/76/66/29/1000_F_376662920_zqGXBodBGhHkUQEFbnHt1FuQSV7stYVi.jpg" alt="image not found"
                className="h-[130px] w-[300px]"/>
            </div>
            <div className="mt-[20px] h-[200px] w-[400px text-center">
            <div className="p-[10px]">
                <p className="font-semibold text-xl">© 2009-2024 Notify.com</p>
                <ul className="flex items-center justify-center gap-x-3">
                    <li className="text-blue-900 font-bold text-lg hover:text-red-700"><Link to={'/about'}>About</Link></li>
                    <li className="text-blue-900 font-bold text-lg hover:text-red-700"><Link to={'/privacy'}>Privacy</Link></li>
                    <Link to={'/feat'}><li className="text-blue-900 font-bold text-lg hover:text-red-700">Features</li></Link>
                </ul>
                <p className="text-base font-serif font-semibold">Notify.com is your everyday online notepad. You can take notes and share notes online without having to login.</p>
            <p className="text-base font-serif font-semibold">You can use a text editor and save your notes.</p>
            <p className="text-base font-serif font-semibold"><span className="font-bold text-blue-800 text-lg">Best of all -</span> Notify is a fast, clean, and easy-to-use notepad online.</p>
            </div>
            </div>
        </div>
    )
}