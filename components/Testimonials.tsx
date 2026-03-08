import { Rating } from "@mui/material";
import Image from "next/image";

interface usersProps {
  testimonialImg: string;
  img: string;
  name: string;
  altName: string;
  bio: string;
}

const users: usersProps[] = [
  {
    testimonialImg: "/testimonial-bg-1.svg",
    img: "/avatar1.svg",
    name: "Bang Upin",
    altName: "Pedagang Asongan",
    bio: "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
  },
  {
    testimonialImg: "/testimonial-bg-2.svg",
    img: "/avatar2.svg",
    name: "Ibuk Sukijan",
    altName: "Ibu Rumah Tangga",
    bio: "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
  },
  {
    testimonialImg: "/testimonial-bg-3.svg",
    img: "/avatar3.svg",
    name: "Mpok Ina",
    altName: "Karyawan Swasta",
    bio: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
  },
];

function Testimonials() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="text-center flex flex-col gap-2 mb-15">
          <h3 className="uppercase text-sm font-light text-[#E58411]">
            Testimonials
          </h3>
          <h2 className="text-4xl capitalize text-[#1E1E1E]">
            Our Client Reviews
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center place-items-center">
          {users.map((user, index) => (
            <div key={index} className="relative">
              <Image
                src={user.testimonialImg}
                width={370}
                height={506}
                alt="img"
                className="w-full h-auto"
              />

              {/* testimonial card */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl p-4 pt-10 shadow-lg flex flex-col items-center min-h-55">
                <Image
                  src={user.img}
                  width={60}
                  height={60}
                  alt="avatar"
                  className="rounded-full absolute -top-7 left-1/2 -translate-x-1/2 border-4 border-white"
                />

                <div className="flex flex-col items-center text-center gap-2">
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E]">
                      {user.name}
                    </h4>
                    <p className="text-sm text-gray-500">{user.altName}</p>
                  </div>

                  <p className="text-black/50">{user.bio}</p>
                </div>

                <Rating
                  className="mt-auto"
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
