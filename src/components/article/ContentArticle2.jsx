import React from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContentArticle2 = () => {
  return (
    <Card className="max-w-3xl mx-auto card-container">
      <CardContent className="p-6">
        <nav className="flex items-center text-sm mb-4">
          <a href="/">Home</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="/index2">Docs</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span>Informasi Umum</span>
        </nav>

        <h1 className=" text-2xl font-bold mb-4">Informasi Umum</h1>

        <ul className="space-y-2">
          <li>
            <a href="/index3" className=" hover:text-blue-600 flex items-center">
            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
              Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-blue-600 flex items-center">
            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
              Cara Mengaktifkan Two-Factor Authentication (2FA) di Portal Client CloudKilat
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-blue-600 flex items-center">
            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
              Coba
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ContentArticle2;