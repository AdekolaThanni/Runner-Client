import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { queryActions } from "../../stores/appStore/queryReducer";

function Logo() {
  const dispatch = useDispatch();
  return (
    <Link to="/" className="text-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
        className="scale-[2]"
        onClick={() => dispatch(queryActions.clearQuery())}
      >
        <g fill="#8a7350">
          <path d="M6.835 5.092v2.777h1.549c.995 0 1.573-.463 1.573-1.36c0-.913-.596-1.417-1.537-1.417H6.835Z" />
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm3.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46c0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5V4.002Z" />
        </g>
      </svg>
    </Link>
  );
}

export default Logo;
