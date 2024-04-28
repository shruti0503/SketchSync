import React, { createContext, useContext, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface AuthProps {
  children: React.ReactNode; 
}

const AuthContext = createContext<any | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<any> = ({ children }) => {
  // Your authentication logic here
  const user = useUser();

  const checkAboutUser=()=>{
    if (!user || !user?.isSignedIn) {
      console.log("nor sign", user)
      redirect('/sign-up');
     
    }
    // else{
    //   console.log(" sign", user)
    //   redirect('/')
    // }

  }

  return <AuthContext.Provider value={{ user , checkAboutUser}}>{children}</AuthContext.Provider>;
};
