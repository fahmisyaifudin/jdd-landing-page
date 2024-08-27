import Image from "next/image";
import React from "react";

const logos = [
  "logo-ipsum.png",
  "logo-ipsum-2.png",
  "logo-ipsum-3.png",
  "logo-ipsum-4.png",
];

const Sponsor = () => {
  return (
    <div className=" bg-white text-black pt-[96px] pb-[100px]">
      <div className="container mx-auto flex items-center">
        <div className="w-[100%]">
          <div className="flex mb-10 justify-center">
            <div className="flex">
              <Image
                quality={100}
                src="/black-star.png"
                alt=""
                width={30}
                height={0}
              />
              <h3 className="ms-[10px] font-semibold text-[20px] me-[10px]">
                Our Sponsor
              </h3>
              <Image
                quality={100}
                src="/black-star.png"
                alt=""
                width={30}
                height={0}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center">
            {logos.map((logo, index) => (
              <Image
                key={index}
                quality={100}
                src={`/${logo}`}
                alt={`Logo ${index + 1}`}
                width={250}
                height={100}
                className="mb-4 sm:mb-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
