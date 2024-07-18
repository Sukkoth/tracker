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
            Now Reset Your Password
          </h1>
          <p className='text-stone-500 mt-3'>
            Please enter your password twice
          </p>
        </div>
        <div className='mt-10 space-y-5'>
          <input
            placeholder='Your Password'
            type='password'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-lg focus:border-stone-300'
          />
          <input
            placeholder='Confirm Password'
            type='password'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-lg focus:border-stone-300'
          />
        </div>

        <div className='mt-10'>
          <Link href='/'>
            <Button>Continue</Button>
          </Link>
        </div>

        <div className='mt-10 font-medium text-center text-xl'>
          <p>
            <span className='text-primary-400 hover:text-primary-300 cursor-pointer'>
              Resend In:
            </span>{" "}
            00:30
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
