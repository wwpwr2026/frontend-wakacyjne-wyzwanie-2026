import { MOCK_USERS } from "../types/User";
import { notFound } from "next/navigation";

export function UserCard({ id }: {id: string}) {

    const idx = parseInt(id);

    if( !(1 <= idx && idx <= MOCK_USERS.length) ){
        notFound();
    }

    const user = MOCK_USERS[idx-1];

  return (
    <div className="border rounded-lg p-4 shadow-sm w-60 shrink-0">
        <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-48 h-48 rounded-full mb-3"
        />
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{user.role}</p>
        <p className="text-sm text-gray-600 mb-4">Id: {user.id}</p>
    </div>
  );
}

        
        
