import { UserProfileList } from "@/src/components/UserProfilesList";
import { randomInt } from "node:crypto";

export default async function Home({ searchParams }: {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>
}) {

    const sp = await searchParams;

    if( !('noWait' in sp) ){
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    if( 'error' in sp ){
        throw new Error(`MyError at ${new Date().toTimeString()}`);
    } else if( !('noError' in sp) ){
        if(randomInt(2) == 1){
            throw new Error(`MyError at ${new Date().toTimeString()}`);
        }
    }



  

    return (
        <main className=" flex flex-col justify-between items-center mx-auto max-w-5xl p-8 text-center">
            <header>
            <h1 className="text-4xl font-bold mb-4">
                Witamy w "Wakacyjnym wyzwaniu"
            </h1>
            <p className="text-gray-600 text-lg">
                Sprawdź <span className="underline font-bold">README.md</span> i
                zobacz co dla Ciebie przygotowaliśmy
            </p>
            </header>

            <div className="w-full my-auto py-8">
            <UserProfileList />
            </div>
        </main>
    );
}
 