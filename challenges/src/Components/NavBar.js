import { useNavigate } from "react-router"

export const NavBar = ()=>{
    const navigate = useNavigate()
    return<>
        <div className="absolute w-full top-0">
            <nav className="flex align-middle bg-blue-500 px-2 py-3 space-x-4">
            <div className='flex gap-2 pt-1'>
                <a onClick={()=>navigate("../home")} className="text-white hover:text-blue-700">Home</a>
                <a onClick={()=>navigate("../login")} className="text-white hover:text-blue-700">Login</a>
                <a onClick={()=>navigate("../about")} className="text-white hover:text-blue-700">About</a>
            </div>
            <div className='flex w-full pr-10 justify-center justify-center'>
                <h1 className="text-white text-2xl font-bold">Main App</h1>
            </div>
            </nav>
        </div>
    </>
}