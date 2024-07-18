import React from "react";
import Button from "@/app/_components/Button";
import Link from "next/link";

function page() {
  return (
    <section className='h-full p-5 grid grid-rows-[1fr_auto]'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-4xl italic'>iCare</h1>
        <p className='text-gray-500 italic'>
          We can help you take care of yourself
        </p>
      </div>
      <div className='px-5 space-y-5'>
        <Button>
          <Link href='/login'>Get Started</Link>
        </Button>
        <Button variant='outline'>
          <Link href='/signup'>Create Account</Link>
        </Button>
      </div>
    </section>
  );
}

export default page;
