import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button";
import { UserButton } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant={'ghost'} size={'icon'} className="md:hidden hover:text-gray-900 hover:bg-gray-300 rounded-lg">
        <HamburgerMenuIcon className={cn("h-6 w-6")}/>
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

