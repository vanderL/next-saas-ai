"use client"

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';

export default function MobileSidebar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  
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

