import Link from "next/link";
import {AcademicCapIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import ThemeToggle from "@/components/nav/ThemeToggle";
import SearchInput from "@/components/nav/SearchInput";

export default function TopNav() {
    return (
        <header className="p-2 w-full fixed z-50 top-0 border-b bg-white dark:bg-black">
            <div className='flex items-center w-full px-10'>
                <div className='flex items-center gap-6'>
                    <Link href='/' className='flex items-center gap-3 max-h-16'>
                        <AcademicCapIcon className="size-10 text-secondary"/>
                        <h3 className='text-xl font-semibold uppercase'>Overflow</h3>
                    </Link>
                    <nav className='flex gap-3 my-2 text-md text-neutral-500'>
                        <Link href='/'>About</Link>
                        <Link href='/'>Products</Link>
                        <Link href='/'>Contacts</Link>
                    </nav>
                </div>
    
                <SearchInput />

                <div className='flex basis-1/4 shrink-0 justify-end gap-3'>
                    <ThemeToggle />
                    <Button color='secondary' variant="bordered">Login</Button>
                    <Button color='secondary'>Register</Button>
                </div>

            </div>
        </header>
    );
}