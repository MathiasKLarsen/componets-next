import React from 'react';
import products from '@/data/products.json';
import Link from 'next/link';
import { Product } from '@/app/components/layout/product/page';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { id } = params;

  const product: Product | undefined = products.find(p => p._id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <section className="relative h-[750px]">
      {/* Button in top-right corner */}
      <button className="absolute bottom-4 right-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700">
        <Link href="/components/layout/product"
          className='uppercase text-lg font-bold'
        >
          go back
        </Link>
      </button>

      {/* Centered content */}
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img
          src={`http://localhost:5039/images/product/${product.productimage}`}
          alt={product.alttext}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default ProductPage;
