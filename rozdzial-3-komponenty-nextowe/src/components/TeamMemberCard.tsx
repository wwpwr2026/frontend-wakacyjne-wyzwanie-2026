import Image from 'next/image'
import { Doto } from 'next/font/google'
import Link from 'next/link'

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}


const doto = Doto({
  subsets: ['latin'],
  display: 'swap',
  axes: ['ROND']
})

export default function TeamMemberCard({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) {
  return (
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-xl ">
        <div className="flex w-full max-w-md flex-col overflow-hidden bg-white sm:max-w-xl sm:flex-row">
            <div className="flex h-44 items-center justify-center bg-red-400 sm:h-auto sm:w-48">
                <div className="flex h-24 w-24 m-5 items-center justify-center rounded-full bg-black/20 text-3xl font-bold text-white">
                    <Image
                        src="/avatar.png"
                        alt="Avatar"
                        className="size-24 shrink-0 rounded-full"
                        width={200}
                        height={200}
                        preload={true} // might as well
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4 p-6">
                <div>
                    {/* To access 'ROND' axis we have to use font-variation-settings CSS property
                        We can append properties to a font style object 
                            {
                                ...doto.style,
                                fontWeight: 800,
                                fontVariationSettings: '"ROND" 100'
                            }
                        Or use tailwind custom property mechanism
                            font-weight -> font-medium, font-blod etc. or. font-[700]
                            font-variation-settings -> [font-variation-settings:'ROND'_100]
                    */}
                    <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                    <p className="mt-1 text-sm text-red-700 font-extrabold [font-variation-settings:'ROND'_100]" style={doto.style}>{role}</p>
                </div>
                <p className="text-sm leading-6 text-gray-600">{bio}</p>
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Umiejętności
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                        <li
                            key={skill}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                            {skill}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center h-12 bg-cyan-200">
            <Link 
                className="w-48 bg-gray-100 text-center text gray-700 rounded-full shadow-lg active:shadow-none"
                href="https://solvro.pwr.edu.pl/pl/"
                target="_blank"
            >
                Dowiedz się więcej
            </Link>
        </div>
    </div>
  );
}
