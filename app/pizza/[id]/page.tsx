'use client';
import Image from "next/image";
import { useState, useEffect, use } from "react";
import Link from "next/link";

export default function PizzaDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [pizza, setPizza] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pizza.sulla.hu/pizza/${id}`)
      .then(res => res.json())
      .then(data => {
        setPizza(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl">Betöltés...</div>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl">Pizza nem található</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src={pizza.image_url}
          alt={pizza.name}
          width={800}
          height={600}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{pizza.name}</h1>
          <p className="text-gray-600 mb-6">Pizza ID: {pizza.id}</p>
          <Link 
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded transition-colors"
          >
            Vissza a menühöz
          </Link>
        </div>
      </div>
    </div>
  );
}
