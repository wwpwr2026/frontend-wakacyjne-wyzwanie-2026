"use client"

interface ErrorParams {
    error: Error & {digest?: string},
    retry: () => void
}

export default function Error({ error, retry }: ErrorParams) {

    return (
        <div className="text-center flex flex-col items-center gap-4 py-24 my-auto">
            <p className="text-4xl font-bold">
                Coś poszło nie tak
            </p>
            <p className="mt-1 max-w-xs text-sm text-gray-600">
                Wystąpił błąd: {error.message}
                <br/>
                Digest: {error.digest}
            </p>
            <button 
                onClick={() => retry()}
                className="rounded-full bg-blue-500 text-white w-40 p-2 shadow-lg hover:outline-offset-4 hover:outline-4 hover:outline-blue-500 hover:cursor-pointer active:shadow-none"
            >
                    Spróbuj ponownie<br/>50% szans
            </button>
        </div>

    );
}