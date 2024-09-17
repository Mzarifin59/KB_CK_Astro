import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContentArticle2 = () => {
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
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-6">
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <a href="/">Home</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="/index2">Docs</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span>Informasi Umum</span>
        </nav>

        <h1 className="txt-color text-2xl font-bold mb-4">Informasi Umum</h1>

        <ul className="space-y-2">
          <li>
            <a href={`/articles/${id}`} className="txt-color hover:text-blue-600 flex items-center">
            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
              Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP
            </a>
          </li>
          <li>
            <a href={`/articles/${id2}`} className="txt-color hover:text-blue-600 flex items-center">
            <img src="/mini-logo.png" alt="Mini Logo" width="20px" className="mr-2" />
              Cara Mengaktifkan Two-Factor Authentication (2FA) di Portal Client CloudKilat
            </a>
          </li>
          <li>
            <a href="#" className="txt-color hover:text-blue-600 flex items-center">
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