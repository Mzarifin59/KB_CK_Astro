import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const InfoCard = ({ title, count, links, href }) => (
    <Card className="mt-2 card-container">
        <CardHeader>
            <div className="flex items-center mb-4">
                <img src="/folder.png" alt="" className="w-8 h-8" />
                <CardTitle className="text-blue-500 ml-4 text-lg md:text-xl">
                    <a href={href}>{title}</a>
                </CardTitle>
                <div className="ml-auto bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-sm">
                    <h1 className="text-xl md:text-2xl">{count}</h1>
                </div>
            </div>
            <hr className="h-1 bg-blue-500" />
        </CardHeader>

        <CardContent>
            <div className="text-custom-gray space-y-4 md:space-y-5 mt-2">
                {links.map((link, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <img src="/mini-logo.png" alt="" className="w-4 h-4" />
                        <a href={link.href} className="text-sm md:text-base">{link.label}</a>
                    </div>
                ))}
                <div className="mt-4 md:mt-8">
                    <button className="w-full md:w-auto px-4 py-2 text-blue-500 border border-blue-500 rounded-full transition-colors duration-300 hover:bg-blue-500 hover:text-white text-sm md:text-base">
                        Explore More
                    </button>
                </div>
            </div>
        </CardContent>
    </Card>
);

const Content = () => {
    const cardData = [
        {
            title: "Informasi Umum",
            count: 3,
            href: "/index2",
            links: [
                { label: "Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP", href: "/index2" },
                { label: "Cara Mengaktifkan Two-Factor Authentication (2FA)", href: "/2fa-setup" },
                { label: "Coba", href: "/coba" },
            ],
        },
        {
            title: "Aplikasi",
            count: 3,
            href: "/index2",
            links: [
                { label: "Cara Instalasi Grav CMS di AlmaLinux 8", href: "/grav-install" },
                { label: "Instalasi NextCloud di Kilat Hosting 2.0", href: "/nextcloud-install" },
                { label: "Instalasi SSL Let’s Encrypt di Kilat Hosting 2.0", href: "/ssl-install" },
            ],
        },
        {
            title: "Konfigurasi",
            count: 4,
            href: "/konfigurasi",
            links: [
                { label: "Upgrade OS CentOS 7 ke AlmaLinux 8 pada VPS cPanel", href: "/upgrade-os" },
                { label: "Cara Mengatur DNS Record dan Proxy di Cloudflare", href: "/dns-setup" },
                { label: "Cara akses Kilat Storage menggunakan S3 Browser", href: "/s3-browser" },
                { label: "Cara Mengimport/Upload Database di Layanan Kilat Hosting", href: "/db-upload" },
            ],
        },
        {
            title: "Keamanan",
            count: 2,
            href: "/keamanan",
            links: [
                { label: "​Cara Instalasi SSL di Web Server Apache", href: "/apache-ssl" },
                { label: "Cara Mengatur DNS Record dan Proxy di Cloudflare [REVIEW]", href: "/dns-review" },
            ],
        },
        {
            title: "Jaringan",
            count: 1,
            href: "/jaringan",
            links: [
                { label: "5 Plugins WordPress Terbaik untuk SEO", href: "/wordpress-plugins-seo" },
            ],
        },
        {
            title: "Kilat VM",
            count: 4,
            href: "/kilat-vm",
            links: [
                { label: "Instalasi Agent layanan Kilat Protect pada OS Debian 11", href: "/debian-kilat-protect" },
                { label: "Cara Melakukan Ping dan Traceroute di Linux", href: "/ping-traceroute" },
            ],
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-16">
            {cardData.map((card, index) => (
                <InfoCard
                    key={index}
                    title={card.title}
                    count={card.count}
                    links={card.links}
                    href={card.href}
                />
            ))}
        </div>
    );
};

export default Content;
