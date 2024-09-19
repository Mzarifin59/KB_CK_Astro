import React, { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion2";

const ContentArticle3 = () => {
    const [data, setData] = useState([]);
      const [currentIndex, setCurrentIndex] = useState(0);
  
      useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(
                "https://int-rifky.awan.id/api/articles?populate=*"
              );
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const result = await response.json();
              setData(result.data);
            } catch (err) {
              console.error("Fetching error:", err);
            }
          };
          fetchData();
  
        }, []);
  
        const id = data[0]?.id;
        const id2 = data[1]?.id;
    return (
        <div >
                <div className= ' p-2 rounded-sm shadow-lg max-w-[19rem] mt-8'>
            <Accordion type="single" collapsible className='ml-4'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Informasi Umum</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                        <div className="flex items-center ">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href={`/articles/${id}`} className='flex-1 txt-color hover:text-blue-600'>
                                Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP</a>

                        </div>

                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href={`/articles/${id2}`} className='flex-1 txt-color hover:text-blue-600'>
                                Cara Mengaktifkan Two-Factor Authentication (2FA) di Portal Client CloudKilat</a>

                        </div>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>
                                Coba</a>

                        </div>


                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Aplikasi</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                Cara Instalasi Grav CMS di AlmaLinux 8</a>
                        </div>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>


                                Instalasi NextCloud di Kilat Hosting 2.0</a>
                        </div>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>


                                Instalasi SSL Let’s Encrypt di Kilat Hosting 2.0</a>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger >Konfigurasi</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                Upgrade OS CentOS 7 ke AlmaLinux 8 pada VPS cPanel</a>
                        </div>

                        <div className='flex items-center'>
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className='mr-2' />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>
                                Cara Mengatur DNS Record dan Proxy di Cloudflare</a>
                        </div>

                        <div className='flex items-center'>
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className='mr-2' />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>Cara akses Kilat Storage menggunakan S3 Browser</a>

                        </div>

                        <div className='flex items-center'>
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className='mr-2' />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>
                                Cara Mengimport/Upload Database di Layanan Kilat Hosting 2.0</a>

                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger >Jaringan</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                5 Plugins WordPress Terbaik untuk SEO</a>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger >Keamanan</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                Cara Instalasi SSL di Web Server Apache</a>
                        </div>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                Cara Mengatur DNS Record dan Proxy di Cloudflare [REVIEW]</a>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger >Kilat VM</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center">
                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                            <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                Instalasi Agent layanan Kilat Protect pada OS Debian 11</a>
                        </div>
                        <div className='mt-2'>
                            <Accordion type='single' collapsible>
                                <AccordionItem value="sub-item-1">
                                    <AccordionTrigger >Troubleshooting</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center">
                                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                                            <a href="" className='flex-1 txt-color hover:text-blue-600'>


                                                Cara Melakukan Ping dan Traceroute di Linux</a>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>


                            <Accordion type='single' collapsible>
                                <AccordionItem value="sub-item-2">
                                    <AccordionTrigger >Aplikasi</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center">
                                            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                                            <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                                Cara Transfer Data ke Kilat VM 2.0 menggunakan WinSCP via SCP dan SFTP</a>
                                        </div>
                                        <Accordion type='single' collapsible>
                                            <AccordionItem value="sub-sub-item-1">
                                                <AccordionTrigger >Control Panel</AccordionTrigger>
                                                <AccordionContent>
                                                    <Accordion type="single" collapsible>
                                                        <AccordionItem value="sub-sub-item-2">
                                                            <AccordionTrigger >Anak Control Panel</AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="flex items-center">
                                                                    <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
                                                                    <a href="" className='flex-1 txt-color hover:text-blue-600'>

                                                                        Upgrade OS CentOS 7 ke AlmaLinux 8 pada VPS cPanel</a>
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
            
        </div>
    );
};

export default ContentArticle3;
