import React from "react";
import AuthNav from "@/app/_components/Auth/AuthNav";
import Button from "@/app/_components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type Props = {
  handlePageChange: (first: boolean) => void;
};
function First({ handlePageChange }: Props) {
  return (
    <>
      <AuthNav current={1} total={2} />
      <section className=''>
        <div className='text-center mt-16'>
          <h1 className='text-4xl font-bold tracking-wide'>
            First things first!
          </h1>
          <p className='text-stone-500 mt-3'>
            Let&apos;s create account together
          </p>
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
        </div>
        <div className='mt-10'>
          <Button onClick={() => handlePageChange(false)}>Next</Button>
        </div>
      </section>
      <section>
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
      </section>
    </>
  );
}

export default First;
