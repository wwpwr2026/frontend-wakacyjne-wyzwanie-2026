import { MOCK_USERS } from "../types/User";
import { notFound } from "next/navigation";

export function UserInfo({ id }: {id: string}) {

    const idx = parseInt(id);

    if( !(1 <= idx && idx <= MOCK_USERS.length) ){
        notFound();
    }

    const user = MOCK_USERS[idx-1];

    return (
        <div>
            {`${user.name} (id: ${user.id}) has a role of ${user.role}. They ${user.likesPizza ? 'do' : 'do not'} like pizza. `.repeat(3)}
        </div>
    );
}

        
        
