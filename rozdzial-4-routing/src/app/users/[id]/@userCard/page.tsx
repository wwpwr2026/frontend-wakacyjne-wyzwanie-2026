import { MOCK_USERS } from "@/src/types/User";
import { notFound } from "next/navigation";
import React from "react";
import { UserCard } from "@/src/components/UserCard";

export default async function UserCardPage({ children, params }: {
    children: React.ReactNode;
    params: Promise<{id: string}>
}) {
    const { id: id_str } = await params;

    return (
        <UserCard id={id_str}/>
    );
}