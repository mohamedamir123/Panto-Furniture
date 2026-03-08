import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
interface MaterialsProps {
  title: string;
  heading: string;
  description: string;
}
const data: MaterialsProps = {
  title: "Materials",
  heading: "Very serious materials for making furniture",
  description:
    "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
};

function Materials() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <h3 className="text-[#E58411] tracking-widest font-bold">
              {data.title}
            </h3>
            <h1 className="text-2xl font-bold w-103.25 text-pretty capitalize lg:text-3xl">
              {data.heading}
            </h1>
            <p className="max-w-xl w-116 text-muted-foreground lg:text-md text-black/50">
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
          <div className="px-2 sm:px-0 grid grid-cols-3 gap-3 sm:gap-2 items-center">
            <Image
              src={"/material1.svg"}
              alt={"Image"}
              width={223}
              height={250}
              className="aspect-video rounded-md object-cover w-55.75 h-62.5"
            />
            <Image
              src={"/material3.svg"}
              alt={"Image"}
              width={223}
              height={339}
              className="row-span-2 col-span-2 aspect-video rounded-md w-full h-111.25 justify-self-end"
            />
            <Image
              src={"/material2.svg"}
              alt={"Image"}
              width={629}
              height={445}
              className="aspect-video rounded-md object-cover w-55.75 h-84.75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Materials;
