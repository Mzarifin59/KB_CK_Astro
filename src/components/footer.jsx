import React from "react";

const Footer = () => {
    return (
    
        <div>
          <div className="footer-container bg-footer-gray text-custom-gray py-8 mt-48 border">
            <div className="container mx-auto px-4 mt-12">
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <ul className="space-y-5">
                            <li><a href="#" className="text-blue-600 font-family font-size:">Informasi Umum</a></li>
                            <li><a href="#" className="text-blue-600">Konfigurasi</a></li>
                            <li><a href="#" className="text-blue-600">Aplikasi</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-5">
                            <li><a href="" className="text-blue-600">Jaringan</a></li>
                            <li><a href="" className="text-blue-600">Keamanan</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-family mb-4 font-size: 11pt">PT Infinys System Indonesia</h3>
                        <p>Office 88@Kasablanka, Tower A, Unit 7H</p>
                        <p>Jl. Kasablanka Raya, Kav. 88, Jakarta</p>
                        <p>Selatan</p>
                        <p>Jakarta 12870, Indonesia.</p>
                        <p className="mt-4">+62 21 2968 2828</p>
                        <p>info@cloudkilat.com</p>
                    </div>

                    <div className="ml-5">
                        <img src="/logo-infinys.png" alt="LOGO INFINYS" className="mb-4 w-[10rem] mx-auto" />
                        <p className="">CLOUDKILAT merupakan bagian dan merk dagang dari PT Infinys System Indonesia</p>
                    </div>
                     
                    </div>
                </div>
                </div>
                <div className="mt-8 mb-6 flex flex-col items-center justify-center">
                    <p>Copyright © 2024 Knowledge Base CloudKilat</p>
                </div>
           
           
        </div>
        
        

    );

};

export default Footer;
