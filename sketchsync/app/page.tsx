'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from '@clerk/nextjs';
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuthContext } from "@/providers/authContext";

export default function Home() {
  const {checkAboutUser}=useAuthContext();
  useEffect(()=>{
    checkAboutUser()

  },[])



  return (

   <Button>
    click ME :smiles
   </Button>
  );
}
