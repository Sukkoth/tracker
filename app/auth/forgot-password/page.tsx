import AuthNav from "@/app/_components/Auth/AuthNav";
import Button from "@/app/_components/Button";
import Link from "next/link";

function page() {
  return (
    <div className='h-full p-5 grid grid-rows-[auto_1fr_auto]'>
      <AuthNav />
      <div className=''>
        <div className='text-center mt-16'>
          <h1 className='text-4xl font-bold tracking-wide'>
            It&apos;s Okay To Forget Password.
          </h1>
          <p className='text-stone-500 mt-3'>Please Enter your email</p>
        </div>
        <div className='mt-10 space-y-5'>
          <input
            placeholder='Your Email'
            type='email'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-lg focus:border-stone-300'
          />
        </div>
        <div className='mt-10'>
          <Link className='w-full h-full' href='forgot-password/verify'>
            <Button>Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
