import React from "react";
import ContentCard from "./ContentCard";

const ContentArticle2 = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/index2" },
    { label: "Informasi Umum", href: "#" },
  ];

  const items = [
    {
      label: "Cara Upload File ke Layanan Kilat Hosting 2.0 melalui FTP",
      href: "/index3",
      icon: "/mini-logo.png",
    },
    {
      label: "Cara Mengaktifkan Two-Factor Authentication (2FA) di Portal Client CloudKilat",
      href: "#",
      icon: "/mini-logo.png",
    },
    {
      label: "Coba",
      href: "#",
      icon: "/mini-logo.png",
    },
  ];

  return <ContentCard breadcrumbLinks={breadcrumbLinks} title="Informasi Umum" items={items} />;
};

export default ContentArticle2;
