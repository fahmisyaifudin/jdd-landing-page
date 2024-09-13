import Star from "@/assets/svgs/Star";
import World from "@/assets/svgs/World";
import Image from "next/image";
import React from "react";

const benefits = [
  {
    title: "Jaringan dan Kolaborasi",
    description:
      "Bertemu dengan sesama profesional IT, pemimpin komunitas, dan penggiat teknologi di Jawa Timur.",
  },
  {
    title: "Pengalaman Berharga",
    description:
      "Mendapatkan wawasan dan pengetahuan baru dari para ahli industri.",
  },
  {
    title: "Sertifikat",
    description:
      "Sertifikat keikutsertaan yang dapat digunakan untuk meningkatkan portofolio profesional Anda.",
  },
  {
    title: "Hadiah Menarik",
    description:
      "Kesempatan untuk memenangkan hadiah menarik selama acara berlangsung.",
  },
];

const Benefit = () => {
  return (
    <div className="bg-secondary py-20 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        <div>
          <div className="flex mb-3 justify-center lg:justify-start gap-2 items-center">
            <Star />
            <p className="font-semibold">Benefits</p>
            <Star />
          </div>
          <p className="mb-8 font-semibold text-5xl text-center lg:text-left text-white">
            What Will You Get
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blackText">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary p-5 rounded-[30px]">
                <World />
                <p className="font-semibold mt-2 mb-1 text-lg">
                  {benefit.title}
                </p>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:h-full h-[500px] rounded-3xl overflow-hidden">
          <Image
            quality={100}
            src="/world.png"
            alt=""
            fill
            placeholder="blur"
            blurDataURL="#"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
