import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
interface ExperiencesProps {
  title: string;
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}
const data: ExperiencesProps = {
  title: "Experiences",
  heading: "We Provide you the best experience",
  description:
    "You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
  image: {
    src: "/Experience-img.svg",
    alt: "Image",
  },
};

function Experiences() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={629}
              height={445}
              className="aspect-video w-full order-2 sm:order-1 rounded-md object-bottom object-cover shadow-2xl shadow-amber-600/50"
            />
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left order-1 sm:order-2">
            <h3 className="text-[#E58411] tracking-widest font-bold">
              {data.title}
            </h3>
            <h1 className="text-2xl font-bold w-103.25 text-pretty capitalize lg:text-3xl">
              {data.heading}
            </h1>
            <p className="max-w-xl w-115 text-muted-foreground lg:text-md text-black/50">
              {data.description}
            </p>
            <div className="flex w-full justify-center lg:justify-start">
              <Link
                href={"/more-info"}
                className="flex gap-2 items-center text-[#E58411]"
              >
                <span className="capitalize">more info</span>
                <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
