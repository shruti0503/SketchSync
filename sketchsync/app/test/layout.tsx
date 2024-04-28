'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from '@clerk/nextjs';
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { AuthProvider } from "@/providers/authContext";
type Props = {children:React.ReactNode}

export default function Home(props:Props) {

  const user=useUser();



  return (
  
    <p>testin</p>
  );
}
