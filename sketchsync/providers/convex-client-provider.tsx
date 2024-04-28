"use client";
import { redirect } from "next/navigation";
import  { ClerkProvider, useAuth} from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useUser } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import {
    AuthLoading,
    Authenticated,
    ConvexReactClient,
} from "convex/react";
import { Children, useEffect } from "react";

interface ConvexClientProviderProps {
    children: React.ReactNode; 
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const publishableKey=process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const convex = new ConvexReactClient (convexUrl);


export const ConvexClientProvider = ({
    children,
}: ConvexClientProviderProps) => {
    console.log("cons",convex)
    console.log('child', children)
    
    
   
    
    return (
            <ClerkProvider publishableKey={publishableKey}>
                <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                    {children}
                </ConvexProviderWithClerk>
            </ClerkProvider>
    );
} ;