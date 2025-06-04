import React from 'react';
import Link from 'next/link';
import products from '@/data/products.json'; // relative path to your JSON

export interface Product {
  _id: string
  productimage: string
  alttext: string
  title: string
}

const Page = (): React.ReactElement => {

  return (
    <section className="grid items-center justify-items-center h-[750px] p-6">
      <h2 className="uppercase text-2xl font-bold">Product</h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1300px]">
        {products.map(({ productimage, alttext, title, _id }) => (
          <Link href={`/products/${_id}`} key={_id} passHref>
            <div className="bg-neutral-700 rounded-lg p-6 block hover:scale-105 transition-transform duration-200 cursor-pointer">
              <figure className="flex flex-col items-center">
                <figcaption className="text-xl font-bold pb-4 w-full text-center">
                  {title}
                </figcaption>
                <img
                  className="object-cover rounded-lg"
                  src={`http://localhost:5039/images/product/${productimage}`}
                  alt={alttext}
                />
              </figure>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Page;
