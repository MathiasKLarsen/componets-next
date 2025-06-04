import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className='pt-10 h-[750px] flex flex-col justify-center'>
      <section className="bg-neutral-700 py-20">
        <div className='w-[1100px] grid grid-cols-3 gap-10 mx-auto text-center'>
  
          {/* Location */}
          <div className='flex flex-col items-center'>
            <h3 className="text-[1.2rem] font-semibold mb-4 uppercase">Location</h3>
            <p className="w-25">Ydesvej 4 8500 Grenaa</p>
          </div>
  
          {/* Social Media Icons */}
          <div>
            <h3 className="text-[1.2rem] font-semibold mb-4 uppercase">Around the Web</h3>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-3 rounded-full border-2 border-white hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="border-2 border-white p-3 rounded-full hover:bg-blue-400 transition"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="border-2 border-white p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedinIn />
              </Link>
              <Link href="https://dribbble.com"
                target="_blank"
                className="border-2 border-white p-3 rounded-full hover:bg-pink-500 transition"
              >
                <FaDribbble />
              </Link>
            </div>
          </div>
  
          {/* About */}
          <div>
            <h3 className="text-[1.2rem] font-semibold mb-4 uppercase">About [firma navn]</h3>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dolor aspernatur rem quibusdam sunt esse perferendis modi?
            </p>
          </div>

        </div>
      </section>

       {/* Copyright */}
      <div className="text-center my-5">
        <p className="text-sm">Copyright &copy; [firma navn]</p>
      </div>
    </footer>
  )
}

export default Footer
