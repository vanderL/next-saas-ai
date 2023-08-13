"use client"

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={'ghost'} size={'icon'} className="md:hidden hover:text-gray-900 hover:bg-gray-300 rounded-lg">
          <HamburgerMenuIcon className={cn("h-6 w-6")}/>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

