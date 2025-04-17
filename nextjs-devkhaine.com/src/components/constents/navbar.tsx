"use client"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  



export default function Navbar() {
    return (
        <NavigationMenu className="flex items-center justify-between w-full bg-white dark:bg-gray-900 pl-4 pr-4">

            <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            </Link>
            <NavigationMenuList  >
                 
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        <Link href="/">Home</Link>
                    </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        <Link href="/projects">Projects</Link>
                    </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        <Link href="/blog">Blog</Link>
                    </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        <Link href="/course">Courses</Link>
                    </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        <Link href="/about">About</Link>
                    </NavigationMenuTrigger>
                </NavigationMenuItem>
            </NavigationMenuList>
            <Switch />
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </NavigationMenu>
    )
}