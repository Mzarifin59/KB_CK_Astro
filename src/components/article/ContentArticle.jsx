import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSection = ({ title, items, count }) => (
    <AccordionItem value={title.toLowerCase().replace(' ', '-')}>
        <div className="flex justify-between card-container items-center">
            <div className="flex items-center space-x-4">
                <img src="/folder.png" alt="Folder Icon" width="25" />
                <AccordionTrigger className=" text-lg font-semibold">{title}</AccordionTrigger>
            </div>
            {count && (
                <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8">
                    {count}
                </div>
            )}
        </div>
        <AccordionContent className='space-y-6 mt-2'>
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <img src="/mini-logo.png" alt="Mini Logo" width="20" className="mr-2" />
                    <a href={item.href} className='flex-1  hover:text-blue-600'>{item.title}</a>
                </div>
            ))}
        </AccordionContent>
    </AccordionItem>
);

const Information = () => {
    const sections = [
        {
            title: "Informasi Umum",
            items: [
                { title: "Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP", href: "/" },
                { title: "Cara Mengaktifkan Two-Factor Authentication (2FA) di Portal Client CloudKilat", href: "/" },
                { title: "Coba", href: "/" }
            ],
            count: 3
        },
        {
            title: "Aplikasi",
            items: [
                { title: "Cara Instalasi Grav CMS di AlmaLinux 8", href: "/" },
                { title: "Instalasi NextCloud di Kilat Hosting 2.0", href: "/" },
                { title: "Instalasi SSL Let's Encrypt di Kilat Hosting 2.0", href: "/" }
            ],
            count: 3
        },
        {
            title: "Konfigurasi",
            items: [
                { title: "Upgrade OS CentOS 7 ke AlmaLinux 8 pada VPS cPanel", href: "/" },
                { title: "Cara Mengatur DNS Record dan Proxy di Cloudflare", href: "/" },
                { title: "Cara akses Kilat Storage menggunakan S3 Browser", href: "/" },
                { title: "Cara Mengimport/Upload Database di Layanan Kilat Hosting 2.0", href: "/" }
            ],
            count: 4
        },
        {
            title: "Jaringan",
            items: [
                { title: "5 Plugins WordPress Terbaik untuk SEO", href: "/" }
            ],
            count: 1
        },
        {
            title: "Keamanan",
            items: [
                { title: "Cara Instalasi SSL di Web Server Apache", href: "/" },
                { title: "Cara Mengatur DNS Record dan Proxy di Cloudflare [REVIEW]", href: "/" }
            ],
            count: 2
        },
        {
            title: "Kilat VM",
            items: [
                { title: "Instalasi Agent layanan Kilat Protect pada OS Debian 11", href: "/" }
            ],
            count: 1
        }
    ];

    return (
        <div className='card-container p-4 rounded-sm shadow-sm max-w-96 ml-8'>
            <Accordion type="single" collapsible>
                {sections.map((section, index) => (
                    <AccordionSection key={index} {...section} />
                ))}
            </Accordion>
        </div>
    );
};

export default Information;
