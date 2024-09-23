import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";


const ContentArticle4 = ({id}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://int-rifky.awan.id/api/articles/${id}?populate=*`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        console.error("Fetching error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available</p>;

  const { title, content } = data.attributes;

  return (
    <div className="">
      <nav className="flex items-center text-1xl font-family text-gray-500 mb-4">
        <a href="/">Home</a>
        <ChevronRight className="w-4 h-4 mx-1" />
        <a href="/index2">Docs</a>
        <ChevronRight className="w-4 h-4 mx-1" />
        <a href="/index2">Informasi Umum</a>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-blue-600">
          Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP
        </span>
      </nav>
      
      <div className="toc-sticky">
      <div className=" absolute top-0 right-0 md:-right-56 md:w-48 mt-8">
          <div>
            <h2 className="font-bold text-lg mb-3 txt-color">
              Table of Contents
            </h2>
            <ul className="toc-list space-y-2 text-sm">
              <li>
                <a href="#section1" className="txt-title hover:text-blue-600">
                  1. Persyaratan Umum
                </a>
              </li>
              <li>
                <a href="#section2" className="txt-title hover:text-blue-600">
                  2. Langkah 1: Akses FTP pada Layanan Kilat Hosting 2.0
                </a>
              </li>
              <li>
                <a href="#section3" className="txt-title hover:text-blue-600">
                  3. Langkah 2: Unggah File ke Layanan Kilat Hosting 2.0
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>

      <div className="relative">
        <Card className="mx-auto max-w-[50rem] mt-9">
          <CardHeader>
            <CardTitle className="text-4xl mb-10 txt-title tracking-tight leading-normal">
              {title}
            </CardTitle>

            <div className="bg-custom-blue rounded-3xl p-2 w-28 text-white flex items-center justify-center">
              1 min read
            </div>
          </CardHeader>
          <CardContent className="txt-title">
            <div className="space-y-5">
              <div dangerouslySetInnerHTML={{__html: content}}/>
              <div>
                <CardContent className="bg-custom-blue rounded-lg flex items-center justify-between h-20 p-4">
                  <h1 className="font-medium text-white">
                    Bagaiman dengan konten ini?
                  </h1>
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

        
      </div>
    </div>
  );
};
export default ContentArticle4;
