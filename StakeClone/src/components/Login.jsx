import React from "react";

export default function Login(){
    return(
        <>
           <div className=" fixed top-0 left-0 bg-[#1f1f1f] w-screen h-screen flex items-center justify-center">
            <div className="bg-[#1f1f1f] h-120 w-100 shadow-xl/30 ">
                <nav className="bg-[#1f1f1f] text-white text-xl">
                    <ul className="flex space-x-6 justify-center">
                        <li>Login</li>
                        <li>Register</li>
                        <li>Forgot Password</li>
                    </ul>

                </nav>

                  
            </div>
           </div>

        </>
    )
}