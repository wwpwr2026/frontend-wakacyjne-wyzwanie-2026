import { Skeleton } from "@/src/components/ui/skeleton"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"

export default function Loading() {
  return (
    // Skopiowane UserProfilesList.tsx i UserProfileCard.tsx z zawartością zastąpioną przez Skeletony
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-12">
        {Array(3).fill(0).map((item, key) => (
            <Card key={key} className="@container relative mx-auto max-w-none w-full pt-4">
                <Skeleton className="size-24 mx-auto @md:ml-(--card-spacing) rounded-full shrink-0" /> 

                <CardHeader className="grid-cols-1! text-center @md:grid-cols-[1fr_auto]">
                    <CardTitle>
                        <Skeleton className="h-7 w-2/3 mx-auto @md:mx-0 @md:w-1/4" />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className="h-5 w-2/3 mx-auto @md:mx-0 @md:w-1/4" />
                    </CardDescription>
                </CardHeader>

                <CardFooter>
                    <Skeleton className="h-9 w-full @md:w-fit" />
                </CardFooter>
            </Card>
        ))}
    </div>
  )
}