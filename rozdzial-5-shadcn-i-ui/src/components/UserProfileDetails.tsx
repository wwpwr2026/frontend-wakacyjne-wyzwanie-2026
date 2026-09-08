import { User } from "@/src/types/User";
import Image from "next/image";
import PizzaIcon from "@/src/components/PizzaIcon";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

interface UserProfileDetailsProps {
  user: User;
  useDivVersion: boolean;
}

export function UserProfileDetails({ user, useDivVersion }: UserProfileDetailsProps) {
  const { name, role, likesPizza, avatarUrl, description } = user;

  return (

    (useDivVersion) ? 

    <div className="@container relative max-w-full h-full flex flex-col min-h-64 rounded-md border overflow-hidden">
      <div className="relative w-full h-32 @lg:h-48 rounded-inherit">
        <div className="absolute inset-0 z-1 bg-blue-300" />

        <div className="rounded-full size-16 @lg:size-24 absolute bg-white z-2 bottom-0 left-4 translate-y-1/2 border overflow-hidden shadow-md">
          <Image src={avatarUrl} alt="avatar" className="w-full h-full object-cover" fill loading="eager" />
        </div>
      </div>

      <div className="w-full grid grid-cols-2 p-4 pt-12 @lg:pt-16 bg-white">
        {likesPizza && <div className="ml-auto row-span-2 col-start-2 size-10 grid place-items-center rounded-full">
            <PizzaIcon />
        </div>}

        <h1 className="row-start-1 col-start-1 font-semibold text-xl @md:text-2xl">{name}</h1>
        <span className="row-start-2 col-start-1 text-muted-foreground">{role}</span>
        <p className="mt-2 text-muted-foreground col-span-full @lg:max-w-md">{description}</p>
      </div>
    </div>

    :
    
    <Card className="@container relative max-w-full h-full min-h-64 pt-0 [--card-spacing:--spacing(0)] rounded-md border">
        
        <div className="relative h-32 @lg:h-48 bg-blue-300">
            <Avatar className="size-16 @lg:size-24 absolute bg-white z-2 bottom-0 left-4 translate-y-1/2 border overflow-hidden shadow-md">
                <AvatarImage src={avatarUrl} />
            </Avatar>
        </div>

            
        <CardHeader className="p-4 pb-0 pt-12 @lg:pt-16 gap-0">
            <CardAction>
                {likesPizza && <div className="ml-auto size-10 rounded-full">
                    <PizzaIcon />
                </div>}
            </CardAction>
            <CardTitle className="text-xl @md:text-2xl font-semibold">
                {name}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
                {role}
            </CardDescription>
        </CardHeader>

        <CardContent className="mt-2 p-4 pt-0 text-muted-foreground @lg:max-w-md">
            {description}
        </CardContent>

    </Card> 

  )
}