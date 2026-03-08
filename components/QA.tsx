import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Details {
  title: string;
  description: string;
}

const details: Details[] = [
  {
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
  {
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
  {
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
];
function QA() {
  return (
    <section className="container mx-auto py-30.5 px-20">
      <div className="flex sm:flex-row flex-col gap-32.5 items-center justify-between">
        <div>
          <h2 className="text-3xl text-black font-bold capitalize">
            why<br />choosing us
          </h2>
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-10">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col items-start gap-3 w-71">
              <h2 className="font-bold text-xl">{detail.title}</h2>
              <p className="text-black/60">
                {detail.description}
              </p>
              <Link
                href={"/more-info"}
                className="flex gap-2 items-center text-[#E58411]"
              >
                <span className="capitalize">more info</span>
                <FaLongArrowAltRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QA;
