import React from "react";
import AuthNav from "@/app/_components/Auth/AuthNav";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Button from "@/app/_components/Button";
import Link from "next/link";

function page() {
  return (
    <div className='h-full p-5 grid grid-rows-[auto_1fr_auto]'>
      <AuthNav />
      <div className=''>
        <div className='text-center mt-16'>
          <h1 className='text-4xl font-bold tracking-wide'>
            Yippy! You&apos;re Back!
          </h1>
          <p className='text-stone-500 mt-3'>We are happy to see you back</p>
        </div>
        <div className='mt-10 space-y-5'>
          <input
            placeholder='Your Email'
            type='email'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-lg focus:border-stone-300'
          />
          <input
            placeholder='Your Password'
            type='password'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-lg focus:border-stone-300'
          />
          <div className='text-end hover:text-primary-400'>
            <Link href='/auth/forgot-password'>Forget Password?</Link>
          </div>
        </div>
        <div className='mt-10'>
          <Link href='/'>
            {" "}
            <Button>Next</Button>
          </Link>
        </div>
      </div>
      <div>
        <p className='mb-5 text-center text-stone-500 text-lg'>
          Or use our social media
        </p>
        <div className='space-y-5'>
          <Button variant='outline' outlineColor='border-stone-200'>
            <div className='text-black flex items-center justify-center gap-3'>
              <span className='text-2xl'>
                <FcGoogle />
              </span>
              Sign up with Google
            </div>
          </Button>
          <Button variant='dark'>
            <div className='flex items-center justify-center gap-3'>
              <span className='text-2xl'>
                <FaGithub />
              </span>
              Sign up with GitHub
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
