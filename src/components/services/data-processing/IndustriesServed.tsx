import React from 'react';
import { Building2, ShoppingCart, Stethoscope, BadgeDollarSign, GraduationCap, Truck } from 'lucide-react';

export default function IndustriesServed() {
  const industries = [
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Process patient records, billing information, and clinical data securely and efficiently.',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80'
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      description: 'Organize product data, customer information, and sales analytics for improved operations.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80'
    },
    {
      icon: BadgeDollarSign,
      name: 'Finance',
      description: 'Manage transactional data, compliance records, and financial reports with precision.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
    },
    {
      icon: Building2,
      name: 'Manufacturing',
      description: 'Structure operational data for enhanced workflows and efficiency.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Process student records, course enrollments, and academic performance data.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
    },
    {
      icon: Truck,
      name: 'Logistics',
      description: 'Optimize supply chain and shipment tracking data for streamlined operations.',
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Industries We Serve</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our data processing solutions are tailored to meet industry-specific challenges
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="mb-4">
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-200">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}