export default function LoadingUser(){
    return (
        <div className="m-auto w-60 h-40 flex flex-col items-center">
            <div className="m-2 size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50% animate-spin"></div>
            <div className="text-2xl text-center text-blue-600">
                &nbsp;&nbsp;&nbsp;Loading user data ...
            </div>
        </div>
    );
}