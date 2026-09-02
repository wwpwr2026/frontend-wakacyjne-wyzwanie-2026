import { MOCK_USERS } from "@/src/types/User";
import { notFound } from "next/navigation";
import React from "react";
import { UserInfo } from "@/src/components/UserInfo";

export default async function User({ children, params }: {
    children: React.ReactNode;
    params: Promise<{id: string}>
}) {
    const { id: id_str }  = await params;
    
    return (
        <UserInfo id={id_str} />
    );
}