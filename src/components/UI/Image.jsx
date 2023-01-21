import React, { useState } from "react";
import Spinner from "./Spinner";

function Image({ src, alt, className, execution }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        onLoad={() => {
          setLoaded(true);
          return execution && execution();
        }}
        alt={alt}
        className={`${!loaded && "hidden"} ${className}`}
        crossOrigin
      />
      {!loaded && (
        <div
          className={`flex items-center justify-center bg-lightGray w-full h-full`}
        >
          <Spinner />
        </div>
      )}
    </>
  );
}

export default Image;
