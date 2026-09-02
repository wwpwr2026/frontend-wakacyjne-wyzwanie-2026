import { UserCard } from "@/src/components/UserCard";
import { UserInfo } from "@/src/components/UserInfo";

export default async function UserModal({ children, params }: {
    children: React.ReactNode;
    params: Promise<{id: string}>
}) {
    const { id: id_str } = await params;

    return (
            <div className=" fixed rounded-lg bg-white p-6 shadow-xl z-50 flex flex-col justify-between items-center m-auto max-w-3xl p-8 text-center">
                <div className="flex flex-row border rounded-lg p-4 w-2xl gap-8">
                    <UserCard id={id_str} />
                    <UserInfo id={id_str} />
                </div>
            </div>

    );
}
 