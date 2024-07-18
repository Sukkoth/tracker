import React from "react";
import AuthNav from "@/app/_components/Auth/AuthNav";
import Link from "next/link";
import Button from "@/app/_components/Button";
import { useRouter } from "next/navigation";

type Props = {
  handlePageChange: (first: boolean) => void;
};
function Second({ handlePageChange }: Props) {
  const router = useRouter();
  return (
    <>
      <AuthNav current={2} onBack={() => handlePageChange(true)} />
      <section className=''>
        <div className='text-center mt-16'>
          <h1 className='text-4xl font-bold tracking-wide'>
            Last things last!
          </h1>
          <p className='text-stone-500 mt-3'>
            Let&apos;s create account together
          </p>
        </div>
        <div className='mt-10 flex justify-around'>
          <div className='border w-fit py-4 px-10 rounded-3xl hover:bg-primary-50 cursor-pointer'>
            Male
          </div>
          <div className='border w-fit py-4 px-10 rounded-3xl hover:bg-primary-50 cursor-pointer'>
            Female
          </div>
        </div>

        <div className='mt-10'>
          <Button onClick={() => router.replace("/auth/login")}>Next</Button>
        </div>
      </section>
      <p className='text-lg px-10 text-center'>
        By continuing, you agree to our{" "}
        <Link className='text-primary-300' href='/terms'>
          {" "}
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link href='/privacy' className='text-primary-300'>
          Privacy Policy
        </Link>
      </p>
    </>
  );
}

export default Second;
