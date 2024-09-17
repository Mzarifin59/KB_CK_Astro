import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className='p-4 md:p-8 fixed z-20 w-full h-16 md:h-20 border-b bg-white'>
                <div className='container mx-auto flex items-center justify-between h-full'>
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/logokilat.png"
                            alt="Cloudkilat Logo"
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu size={25} />
                    </button>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-4 space-x-5'>
                        <div className='flex gap-4 space-x-5'>
                            <a href="" className='text-black hover:text-blue-600'>Blog</a>
                            <a href="" className='text-black hover:text-blue-600'>Promosi</a>
                        </div>
                        <NavigationMenu className='text-black'>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='hover:text-blue-600'>Layanan</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink href="#">Kilat VM.2.0</NavigationMenuLink>
                                        <NavigationMenuLink href="#">Kilat Hosting 2.0</NavigationMenuLink>
                                        <NavigationMenuLink href="#">Kilat Protect</NavigationMenuLink>
                                        <NavigationMenuLink href="#">Kilat Storage 2.0</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuViewport />
                        </NavigationMenu>
                        <button className='bg-blue-700 text-white px-5 rounded-lg h-8'>
                            <a href="">Login</a>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b">
                        <div className="flex flex-col p-4 space-y-4">
                            <a href="" className='text-black hover:text-blue-600'>Blog</a>
                            <a href="" className='text-black hover:text-blue-600'>Promosi</a>
                            <details>
                                <summary className='text-black hover:text-blue-600 cursor-pointer'>Layanan</summary>
                                <div className="pl-4 mt-2 space-y-2">
                                    <a href="#" className="block text-black hover:text-blue-600">Kilat VM.2.0</a>
                                    <a href="#" className="block text-black hover:text-blue-600">Kilat Hosting 2.0</a>
                                    <a href="#" className="block text-black hover:text-blue-600">Kilat Protect</a>
                                    <a href="#" className="block text-black hover:text-blue-600">Kilat Storage 2.0</a>
                                </div>
                            </details>
                            <button className='mr-auto'>
                                <a href="">Login</a>
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Background Search */}
            <div className='bg-custom-blue w-full h-[12rem] flex justify-center items-center mt-16 md:mt-20'>
                <div className='bg-white w-[90%] md:w-[48rem] h-[6rem] rounded-lg shadow-lg flex items-center p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-full pl-4 outline-none text-gray-700"
                    />
                </div>
            </div>
        </>
    );
};

export default Header;