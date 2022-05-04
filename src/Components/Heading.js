import React from "react";

function Heading({ title }) {
  return (
    <div className="mb-12 flex xs:block justify-center items-center flex-col">
      <h2 className="font-bold tracking-wide text-xl text-whites">{title}</h2>
      <hr className="border-0 h-1 mt-2 w-24 bg-pink" />
    </div>
  );
}

export default Heading;
