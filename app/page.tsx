'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://pizza.sulla.hu/pizza')
      .then(res => res.json())
      .then(data => setPizzas(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pizza Menü</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pizzas.map((pizza: any) => (
          <div key={pizza.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={pizza.image_url}
              alt={pizza.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-3">{pizza.name}</h2>
              <Link 
                href={`/pizza/${pizza.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
              >
                Részletek
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
