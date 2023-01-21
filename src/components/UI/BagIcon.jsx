import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useBag from "../../hooks/useBag";

function BagIcon() {
  const { amount, getBag } = useBag();

  useEffect(() => {
    getBag();
  }, []);

  return (
    <Link to="/bag" className="relative w-fit h-fit">
      <svg
        width="21"
        height="23"
        viewBox="0 0 21 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4063 9.9375V5.25C14.4063 4.214 13.9947 3.22043 13.2622 2.48786C12.5296 1.7553 11.536 1.34375 10.5 1.34375C9.46401 1.34375 8.47044 1.7553 7.73788 2.48786C7.00531 3.22043 6.59376 4.214 6.59376 5.25V9.9375M18.4229 7.86146L19.7386 20.3615C19.8115 21.0542 19.2698 21.6562 18.5729 21.6562H2.4271C2.26273 21.6564 2.10017 21.622 1.94996 21.5553C1.79976 21.4885 1.66527 21.3909 1.55525 21.2688C1.44522 21.1467 1.36211 21.0028 1.31132 20.8465C1.26053 20.6902 1.24319 20.5249 1.26043 20.3615L2.5771 7.86146C2.60747 7.5735 2.74337 7.30698 2.95861 7.11329C3.17384 6.9196 3.45317 6.81245 3.74272 6.8125H17.2573C17.8573 6.8125 18.3604 7.26562 18.4229 7.86146ZM6.98439 9.9375C6.98439 10.0411 6.94323 10.1405 6.86998 10.2137C6.79672 10.287 6.69736 10.3281 6.59376 10.3281C6.49016 10.3281 6.39081 10.287 6.31755 10.2137C6.24429 10.1405 6.20314 10.0411 6.20314 9.9375C6.20314 9.8339 6.24429 9.73454 6.31755 9.66129C6.39081 9.58803 6.49016 9.54687 6.59376 9.54687C6.69736 9.54687 6.79672 9.58803 6.86998 9.66129C6.94323 9.73454 6.98439 9.8339 6.98439 9.9375V9.9375ZM14.7969 9.9375C14.7969 10.0411 14.7557 10.1405 14.6825 10.2137C14.6092 10.287 14.5099 10.3281 14.4063 10.3281C14.3027 10.3281 14.2033 10.287 14.1301 10.2137C14.0568 10.1405 14.0156 10.0411 14.0156 9.9375C14.0156 9.8339 14.0568 9.73454 14.1301 9.66129C14.2033 9.58803 14.3027 9.54687 14.4063 9.54687C14.5099 9.54687 14.6092 9.58803 14.6825 9.66129C14.7557 9.73454 14.7969 9.8339 14.7969 9.9375V9.9375Z"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {!!amount && (
        <div className="absolute bottom-[-10px] right-[-10px] bg-red-600 rounded-full flex items-center justify-center min-w-[2rem] min-h-[2rem] text-[1.1rem] leading-none">
          {amount}
        </div>
      )}
    </Link>
  );
}

export default BagIcon;
