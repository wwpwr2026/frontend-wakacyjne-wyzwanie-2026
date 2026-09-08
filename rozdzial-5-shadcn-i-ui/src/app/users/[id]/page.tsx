import { MOCK_USERS } from "@/src/components/UserProfilesList";
import { User } from "@/src/types/User";
import { notFound } from "next/navigation";
import { UserProfileDetails } from "@/src/components/UserProfileDetails";
import { buttonVariants } from "@/src/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

interface PageProps { 
    params: Promise<{ id: string }>;
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const sp = await searchParams;

  const user: User | undefined = MOCK_USERS.find((user) => user.id === id);
  if (!user) return notFound();

  const oldProfileDetails = 'old' in sp;

  return (
    <div className="mx-4 md:mx-12 flex flex-col gap-2">
      <Link href='/users' className={buttonVariants({
        variant: 'ghost',
        className: 'w-fit'
      })}>
        <ArrowLeftIcon />
        Back
      </Link>

      <UserProfileDetails user={user} useDivVersion={oldProfileDetails} />
    </div>
  )
}