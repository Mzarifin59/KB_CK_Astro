import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const ContentArticle4 = () => {
    return (
        <div className="">
            <nav className="flex items-center text-1xl font-family text-gray-500 mb-4">
                <a href="/">Home</a>
                <ChevronRight className="w-4 h-4 mx-1" />
                <a href="/index2">Docs</a>
                <ChevronRight className="w-4 h-4 mx-1" />
                <a href="/index2">Informasi Umum</a>
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-blue-600">Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP</span>
            </nav>

            <div className="relative">
                <Card className="mx-auto max-w-[50rem] mt-9">
                    <CardHeader>
                        <CardTitle className="text-4xl mb-10 txt-title tracking-tight leading-normal">
                            Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP
                        </CardTitle>

                        <div className="bg-custom-blue rounded-3xl p-2 w-28 text-white flex items-center justify-center">
                            1 min read
                        </div>
                    </CardHeader>
                    <CardContent className="txt-title">
                        <div className="space-y-5">
                            <p>Halo, Sobat CloudKilat! Apakah Anda memiliki website baru dan ingin mengunggahnya ke layanan Kilat Hosting 2.0? Atau mungkin Anda ingin memperbarui konten website yang sudah ada? Knowledge Base inilah jawabannya!</p>
                            <p>Pada panduan ini, kami akan menjelaskan langkah demi langkah agar Anda dapat dengan mudah mengunggah file, arsip, atau data-data website dari komputer Anda ke layanan Kilat Hosting 2.0 dengan menggunakan FTP (File Transfer Protocol).</p>
                            <p>Simak panduan di bawah ini, yaa 😀</p>
                            <div className="space-y-5" id="section1">
                                <a href="#section1" className="text-2xl font-medium">Persyaratan Umum</a>
                                <ol className="ml-10">
                                    <li><b>Memiliki Akun FTP di Kilat Hosting 2.0</b> ( Baca Juga : Cara Membuat Akun FTP pada Kilat Hosting 2.0 ).</li>
                                    <li>Memiliki Aplikasi FTP Client Pada panduan ini, kami akan mencontohkan cara mengakses dan mengunggah file menggunakan aplikasi <b>FTP Client</b> bernama <b>FileZilla</b>. Jika Anda belum memiliki aplikasi FileZilla, silakan untuk mengunduhnya terlebih dahulu pada tautan berikut: <a href="https://filezilla-project.org/download.php" className="text-blue-600">https://filezilla-project.org/download.php</a></li>
                                </ol>
                            </div>
                            <div className="space-y-5" id="section2">
                                <a href="#section2" className="text-3xl font-medium tracking-normal leading-loose">Langkah 1: Akses FTP Server pada Layanan Kilat Hosting 2.0</a>
                                <ol className="ml-10">
                                    <li>Silakan akses aplikasi FTP Client pada komputer/laptop Anda.</li>
                                    <li>Lengkapi informasi kredensial berikut:</li>
                                </ol>
                                <div>
                                    <p><b>Host</b> : Inputkan alamat FTP Server, gunakan format ftp://nama-domain-anda misalkan ftp://cloudkilat.com.</p>
                                    <p><b>Username</b> : Inputkan akun FTP yang sudah Anda miliki.</p>
                                    <p><b>Password</b> : Inputkan kata sandi dari akun FTP Anda.</p>
                                    <p><b>Port</b> : Inputkan port default dari protokol FTP, yakni <b>Port 21.</b></p>
                                </div>
                            </div>
                            <ol className="ml-10">
                                <li>Kemudian, klik tombol Quickconnect untuk memulai koneksi dengan FTP Server.</li>
                                <li>Apabila koneksi ke FTP server berhasil, daftar direktori dan file akan muncul.</li>
                            </ol>
                            <div className="space-y-5" id="section3">
                                <a href="#section3" className="text-3xl font-medium tracking-normal leading-loose">Langkah 2: Unggah File ke Layanan Kilat Hosting 2.0</a>
                                <ol className="ml-10">
                                    <li>Pada remote site, tentukan direktori tujuan unggahan file.</li>
                                    <li>Pilih file atau direktori di local site yang ingin diunggah.</li>
                                </ol>
                            </div>
                            <div>
                                <CardContent className="bg-custom-blue rounded-lg flex items-center justify-between h-20 p-4">
                                    <h1 className="font-medium text-white">Bagaiman dengan konten ini?</h1>
                                    <div className="flex space-x-4">
                                        <span className="text-white">😊</span>
                                        <span className="text-white">😐</span>
                                        <span className="text-white">😞</span>
                                    </div>
                                </CardContent>

                            </div>

                            <div className="flex items-center">
                                <h1 className="mr-4">Share This Article :</h1>
                                <div className="flex space-x-4">
                                    <img src="/facebook.svg" alt="Facebook" width="30px" />
                                    <img src="/twitter.svg" alt="Twitter" width="30px" />
                                    <img src="/linkedin.svg" alt="LinkedIn" width="30px" />
                                    <img src="/pinterest.svg" alt="Pinterest" width="30px" />
                                </div>
                            </div>


                            <div>
                                <p className="italic mt-16">Updated on August 29, 2024</p>
                            </div>
                        </div>

                    </CardContent>
                </Card>

                <div className="absolute top-0 right-0 md:-right-56 md:w-48">
                    <div>
                        <h2 className="font-bold text-lg mb-3 txt-color">Table of Contents</h2>
                        <ul className="toc-list space-y-2 text-sm">
                            <li><a href="#section1" className="txt-title hover:text-blue-600">1. Persyaratan Umum</a></li>
                            <li><a href="#section2" className="txt-title hover:text-blue-600">2. Langkah 1: Akses FTP pada Layanan Kilat Hosting 2.0</a></li>
                            <li><a href="#section3" className="txt-title hover:text-blue-600">3. Langkah 2: Unggah File ke Layanan Kilat Hosting 2.0</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContentArticle4;
