"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  onBack?: () => void;
  current?: number | string;
  total?: number | string;
};
function AuthNav({ onBack, current, total }: Props) {
  const router = useRouter();
  return (
    <div className='flex justify-between items-center'>
      <div
        onClick={() => {
          onBack ? onBack() : router.back();
        }}
        className='border w-fit p-3 rounded-full border-stone-300 flex items-center justify-center hover:bg-primary-100 cursor-pointer'
      >
        <IoIosArrowBack />
      </div>
      {current || total ? (
        <p>
          {current ?? "1"}/{total ?? "2"}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default AuthNav;
