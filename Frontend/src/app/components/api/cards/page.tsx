import React from 'react';

type Product = {
  _id: string;
  title: string;
  productimage: string;
  alttext: string;
};

async function getProduct(): Promise<Product[]> {
  const res = await fetch(`http://localhost:5039/product/`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

const Page = async () => {
  const product = await getProduct();

  return (
    <section className="grid items-center justify-items-center h-[750px]">
      <h2 className='uppercase text-2xl'>API Cards</h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 max-w-[1300px]">
        {product?.map(({ productimage, alttext, title }, index) => (
          <div key={index} className="bg-neutral-700 rounded-lg p-6">
            <figure className="flex flex-col items-center">
              <figcaption className="text-xl font-bold text-white pb-4 w-full">
                {title}
              </figcaption>
              <img
                className="object-cover rounded-lg"
                src={`http://localhost:5039/images/product/${productimage}`}
                alt={alttext}
              />
            </figure>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Page;
