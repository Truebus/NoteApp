export const NotFound=()=>{
    return(
        <div className="h-[400px] flex justify-center flex-col items-center">
            <div className="">
                <img src="src\assets\oops.gif" alt="img not match" className="h-[150px] w-[250px] relative left-[100px]"/>
                <h1 className="text-red-600 text-6xl font-serif font-bold">Page Not Found!!</h1>
            </div>
        </div>
    )
}