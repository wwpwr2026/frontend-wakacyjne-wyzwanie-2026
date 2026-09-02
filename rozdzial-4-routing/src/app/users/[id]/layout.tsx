import React from "react";

export default function UserLayout({ children, userCard, userInfo }:
{
    children: React.ReactNode
    userCard: React.ReactNode
    userInfo: React.ReactNode
}) {
    
    return (
        <main className=" flex flex-col justify-between items-center m-auto w-180 p-8 text-center">
            <div className="flex flex-row border rounded-lg p-4 w-3xl gap-8">
                {userCard}
                {userInfo}
            </div>
        </main>
    );
}