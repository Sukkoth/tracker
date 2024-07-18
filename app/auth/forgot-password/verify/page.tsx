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
            Please Verify Yourself!
          </h1>
          <p className='text-stone-500 mt-3'>
            A verification code is sent to your email{" "}
          </p>
        </div>
        <div className='mt-10 flex gap-7'>
          <input
            type='email'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-xl font-bold text-center focus:border-secondary-400'
          />
          <input
            type='email'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-xl font-bold text-center focus:border-secondary-400'
          />
          <input
            type='email'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-xl font-bold text-center focus:border-secondary-400'
          />
          <input
            type='email'
            className='bg-transparent outline-none border border-stone-200 w-full rounded-3xl p-4 text-xl font-bold text-center focus:border-secondary-400'
          />
        </div>

        <div className='mt-10'>
          <Link href='reset'>
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
