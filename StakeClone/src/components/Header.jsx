import React from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Header(){
    return (
        <header className=" fixed top-0 left-0 bg-black w-screen h-20 ">
            <nav className="bg-black">
                    <div className="flex justify-between items-center pt-5"> 
                        <input type=" text" placeholder="  search  " className="border-2 border-white border-solid rounded-xl w-100 placeholder-white text-white pl-5"/>
                        <div className="flex items-center">
                            <Link to='/login' className="text-white">
                                Login
                            </Link>
                            
                        </div>

                    </div>
            </nav>
        </header>
    )
    
}