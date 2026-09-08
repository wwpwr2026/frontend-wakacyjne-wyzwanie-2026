import { NavLink } from "../types/NavLink";

import Link from "next/link";

import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

interface NavbarProps {
    nav_links: NavLink[];
}

export default function Navbar({nav_links}: NavbarProps){
    return (
        <Tabs className="py-6 place-items-center" defaultValue={nav_links[0].title}>
            <TabsList variant="line">
                {nav_links.map(link => ( 
                    <TabsTrigger key={link.id} value={link.title}>
                        <Link href={link.href}>{link.title}</Link>
                    </TabsTrigger> 
                ))}
            </TabsList>
        </Tabs>
    );
}