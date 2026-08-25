interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    skills: string[];
    avatarPath: string;
}

import Image from "next/image";

export default function TeamMemberCard({name, role, bio, skills, avatarPath}: TeamMemberCardProps) {
    return (
    <div className="mx-auto my-1 flex flex-col lg:flex-row min-w-md max-w-md lg:min-w-4xl lg:max-w-4xl items-top gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5">
        <div className="flex flex-col max-w-md min-w-md lg:min-w-sm lg:max-w-sm ">
            <div className="flex gap-x-4 items-top">
                <Image
                    className="size-12 shrink-0"
                    src={avatarPath}
                    alt="avatar"
                    width={0}   // Barely even started and we already see paradoxes of modern web dev framework hell.
                    height={0}  // Basic example from tailwind docs uses "size-12" utility class to set size of the image,
                                // at the same time Image component from next.js REQUIRES width and height parameter, even though
                                // they get overriden by the "size-12" style
                                // And it's not like those are some incompatible frameworks and we are trying to force Tailwind into Next.
                                // Using tailwind is RECOMMENDED by next-create-app.
                />        
                <div className="w-3xs shrink-0">
                    <div className="text-xl font-medium text-black">{name}</div>
                    <p className="text-gray-500">{role}</p>
                </div>
            </div>
            <div className="p-4 text-base/10">
                <ul className="list-disc">
                    {skills.map(
                        (skill, index) => <li key={index}><pre><span className="bg-gray-300"> {` ${skill} `} </span></pre></li>
                    )}

                </ul>
            </div>
        </div>
        <div className="text-l font-medium text-black indent-8">
            {
            // We split the bio text on empty lines and create indented paragraphs
            bio.split(/\n\s*\n/).map( (paragraph, index) => 
                <p key={index} className="mb-4">
                    {paragraph}
                </p>
            )}
        </div>
    </div>
    );
}
