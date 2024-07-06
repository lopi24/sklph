"use client";

import CardWrapper from "./card-wrapper";
import Image from "next/image";

const Collection = () => {
  const imgs = 12;
  return (
    <div className="img-gallery w-full mx-0 my-auto grid auto-rows-250px auto-flow-dense gap-2 mt-16">
      {/* just converting it to array */}
      {Array(imgs)
        .fill(null)
        .map((_, index) => index + 1)
        .map((_, index) => (
          <CardWrapper
            description={"Support John Doe and Family"}
            charityId={index}
            key={index}
          >
            <Image
              src="/assets/explore-page-header-img.jpg"
              alt="sample-img"
              height="0"
              width="0"
              sizes="100vw"
              className="hover:scale-105 w-full h-full object-cover transition-all duration-100 ease-linear"
            />
          </CardWrapper>
        ))}
    </div>
  );
};

export default Collection;
