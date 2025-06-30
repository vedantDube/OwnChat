import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";

function login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {user} = await signInWithPopup(firebaseAuth, provider);
    console.log(user);
  };
  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6"><div className="flex items-center justify-center gap-2 text-white">
  <Image
    src="/whatsapp.gif"
    alt="Whatsapp Logo"
    height={300}
    width={300}
  />
  <span className = "text-7xl">OwnChat</span>
   </div>
   <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg "
    onClick={handleLogin}>
   <FcGoogle className="text-4xl"/>
   <span className="text-2xl text-white">Sign in with Google</span>
    </button>
   </div>;
}

export default login;
