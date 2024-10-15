import React, { useState } from "react";

const themes = [
  {
    id: 1,
    theme: "Yellow Themed 📄",
    color: "bg-yellow-500",
    description: "Download as :",
    formats: "PDF, EXCEL & CSV",
    link: "/form",
    imageUrl: "/InvoiceThemes/Yellow.png", // Example image URL
  },
  {
    id: 2,
    theme: "Red Themed 📄",
    color: "bg-red-500",
    description: "Download as :",
    formats: "PDF, EXCEL & CSV",
    link: "/form",
    imageUrl: "/InvoiceThemes/Red.png", // Example image URL
  },
  {
    id: 3,
    theme: "Blue Themed 📄",
    color: "bg-blue-500",
    description: "Download as :",
    formats: "PDF, EXCEL & CSV",
    link: "/form",
    imageUrl: "/InvoiceThemes/Blue.png", // Example image URL
  },
  {
    id: 4,
    theme: "Green Themed 📄",
    color: "bg-green-500",
    description: "Download as :",
    formats: "PDF, EXCEL & CSV",
    link: "/form",
    imageUrl: "/InvoiceThemes/Green.png", // Example image URL
  },
  {
    id: 5,
    theme: "Purple Themed 📄",
    color: "bg-purple-500",
    description: "Download as :",
    formats: "PDF, EXCEL & CSV",
    link: "/form",
    imageUrl: "/InvoiceThemes/Purple.png", // Example image URL
  },
  {
    id: 6,
    theme: "Pink Themed 📄",
    color: "bg-pink-500",
    description: "Download as :",
    formats: "PDF, EXCEL & CSV",
    link: "/form",
    imageUrl: "/InvoiceThemes/Pink.png", // Example image URL
  },
  {
    id: 7,
    theme: "Orange Themed 📄",
    color: "bg-orange-500",
    description: "Download as :",
    formats: "PDF, EXCEL & CSV",
    link: "/form",
    imageUrl: "/InvoiceThemes/Orange.png", // Example image URL
  },
];

export default function ThemesElement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {themes.map((theme) => (
        <div
          key={theme.id}
          className={`flex flex-col ${theme.color} rounded-3xl`}
        >
          <div className="px-4 py-6 sm:px-6 sm:py-8 md:p-10">
            <div className="text-left">
              <h2 className="font-medium tracking-tighter text-white text-5xl lg:text-4xl">
                {theme.theme}
              </h2>
              <p className="mt-4 sm:mt-8 text-sm text-gray-100">
                {theme.description}
              </p>
              <p className="mt-2">
                <span className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                  {theme.formats}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col px-4 sm:px-6 pb-6 sm:pb-8 space-y-4">
            <a
              aria-describedby="tier-starter"
              className="w-full px-4 py-2 text-center text-black bg-white border-2 border-white rounded-full inline-flex justify-center items-center duration-200 hover:bg-transparent hover:text-white focus:outline-none focus-visible:ring-white text-sm"
              href={theme.link}
            >
              Get Started
            </a>
            <button
              className="w-full px-4 py-2 text-center text-black bg-white border-2 border-white rounded-full inline-flex justify-center items-center duration-200 hover:bg-transparent hover:text-white focus:outline-none focus-visible:ring-white text-sm"
              onClick={() => openModal(theme.imageUrl)}
            >
              Preview
            </button>
          </div>
        </div>
      ))}

      {/* Minimalistic Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
          {/* Minimal Close Button */}
          <button
            className="absolute top-4 right-4 p-2 bg-white rounded-full border border-gray-300 shadow hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            onClick={closeModal}
          >
            ✖
          </button>

          {/* Empty Container for Custom Content (optional) */}
          <div className="relative w-full max-w-md p-6">
            <img
              src={selectedImage}
              alt="Preview"
              className="relative w-full h-full object-cover rounded-lg z-10"
            />    </div>
        </div>
      )}



    </div>
  );
}
