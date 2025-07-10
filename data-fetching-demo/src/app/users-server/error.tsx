"use client"
import {useEffect} from 'react';

export default function ErrorPage({error}:{error:Error}){

    useEffect(() => {
        console.error("Error occurred:", error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
                <p className="mt-4 text-gray-700">{error.message || "An unexpected error occurred."}</p>
            </div>
        </div>
    );
}