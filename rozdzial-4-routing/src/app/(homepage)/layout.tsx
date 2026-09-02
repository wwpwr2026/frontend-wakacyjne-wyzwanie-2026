import React from "react";

export default async function HomepageLayout({ children, userModal }: {
    children: React.ReactNode
    userModal: React.ReactNode
}) {
    return (
        <>
        {children}
        {userModal}
        </>
    );
}