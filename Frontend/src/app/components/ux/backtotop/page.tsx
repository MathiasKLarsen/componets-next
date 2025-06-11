'use client'; // For Next.js App Router

import React from 'react'
import { useEffect, useState } from 'react';

const page = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="grid items-center justify-items-center h-min-screen p-6">
      <h2 className='uppercase text-2xl font-bold pb-10'>back to top</h2>
      {/* text spam */}
      <div className='flex flex-col gap-5'>
        <article className='w-[800px] border-2 p-5'>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam iusto ipsum culpa quas omnis praesentium perferendis tenetur aspernatur ea facilis dolore ratione, aliquam maiores vel aperiam aut exercitationem deserunt!
            Nemo, dolor obcaecati qui iste tempore quas cupiditate rerum, possimus accusantium molestiae ratione voluptatem aspernatur delectus modi quae ipsam eveniet sed soluta doloremque ut expedita ullam? Dignissimos tempora magni provident.
            Autem aspernatur numquam, exercitationem in illum quis nesciunt excepturi perferendis reiciendis doloremque totam culpa sit, neque, eligendi vero labore. Iste deleniti reiciendis vitae ex iure, consectetur distinctio quia illum ullam!
            Est natus animi atque, officia eveniet inventore pariatur aperiam vel porro, enim architecto exercitationem maxime. Iste provident culpa magnam sed nesciunt cum aspernatur doloribus, porro corrupti ex nam eum iusto.
            Cumque corporis ipsam rerum perspiciatis tenetur similique, ducimus id explicabo commodi repellat quae laudantium nulla necessitatibus ea blanditiis, iste rem, ut sapiente nisi fugiat! Quas corporis perspiciatis iure cum consequatur.
          </p>
        </article>
        <article className='w-[800px] border-2 p-5'>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam iusto ipsum culpa quas omnis praesentium perferendis tenetur aspernatur ea facilis dolore ratione, aliquam maiores vel aperiam aut exercitationem deserunt!
            Nemo, dolor obcaecati qui iste tempore quas cupiditate rerum, possimus accusantium molestiae ratione voluptatem aspernatur delectus modi quae ipsam eveniet sed soluta doloremque ut expedita ullam? Dignissimos tempora magni provident.
            Autem aspernatur numquam, exercitationem in illum quis nesciunt excepturi perferendis reiciendis doloremque totam culpa sit, neque, eligendi vero labore. Iste deleniti reiciendis vitae ex iure, consectetur distinctio quia illum ullam!
            Est natus animi atque, officia eveniet inventore pariatur aperiam vel porro, enim architecto exercitationem maxime. Iste provident culpa magnam sed nesciunt cum aspernatur doloribus, porro corrupti ex nam eum iusto.
            Cumque corporis ipsam rerum perspiciatis tenetur similique, ducimus id explicabo commodi repellat quae laudantium nulla necessitatibus ea blanditiis, iste rem, ut sapiente nisi fugiat! Quas corporis perspiciatis iure cum consequatur.
          </p>
        </article>
        <article className='w-[800px] border-2 p-5'>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam iusto ipsum culpa quas omnis praesentium perferendis tenetur aspernatur ea facilis dolore ratione, aliquam maiores vel aperiam aut exercitationem deserunt!
            Nemo, dolor obcaecati qui iste tempore quas cupiditate rerum, possimus accusantium molestiae ratione voluptatem aspernatur delectus modi quae ipsam eveniet sed soluta doloremque ut expedita ullam? Dignissimos tempora magni provident.
            Autem aspernatur numquam, exercitationem in illum quis nesciunt excepturi perferendis reiciendis doloremque totam culpa sit, neque, eligendi vero labore. Iste deleniti reiciendis vitae ex iure, consectetur distinctio quia illum ullam!
            Est natus animi atque, officia eveniet inventore pariatur aperiam vel porro, enim architecto exercitationem maxime. Iste provident culpa magnam sed nesciunt cum aspernatur doloribus, porro corrupti ex nam eum iusto.
            Cumque corporis ipsam rerum perspiciatis tenetur similique, ducimus id explicabo commodi repellat quae laudantium nulla necessitatibus ea blanditiis, iste rem, ut sapiente nisi fugiat! Quas corporis perspiciatis iure cum consequatur.
          </p>
        </article>
      </div>
      {
        isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-neutral-600 text-white shadow-lg hover:bg-neutral-700 transition-all"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )
      }
    </section>
  )
}

export default page
