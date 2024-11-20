import React from "react";
import { Card, CardContent } from "./ui/card";

const StudentAccommodationWebsite = () => {
  const accommodations = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      description: "A cozy studio apartment near campus, perfect for students.",
      price: "R3,500 per month",
      imageUrl: "https://via.placeholder.com/600x400?text=Studio+Apartment",
    },
    {
      id: 2,
      title: "Shared Apartment",
      description: "A shared apartment with all the amenities you need.",
      price: "R2,800 per month",
      imageUrl: "https://via.placeholder.com/600x400?text=Shared+Apartment",
    },
    {
      id: 3,
      title: "Single Room in a House",
      description: "A private room in a fully furnished house near UWC.",
      price: "R3,200 per month",
      imageUrl: "https://via.placeholder.com/600x400?text=Single+Room",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Allan's Accommodation
        </h1>
        <p className="text-center text-lg mb-12">
          Premium student accommodation for UWC and CPUT students. We support
          NSFAS and bursaries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden">
              <img
                src={accommodation.imageUrl}
                alt={accommodation.title}
                className="w-full h-48 object-cover"
              />
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">
                  {accommodation.title}
                </h2>
                <p className="text-gray-700 mb-4">{accommodation.description}</p>
                <p className="font-bold text-lg">{accommodation.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentAccommodationWebsite;
