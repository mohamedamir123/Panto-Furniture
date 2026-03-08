import BestSellings from "@/components/BestSellings";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import QA from "@/components/QA";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero/>
      <QA/>
      <BestSellings/>
      <Experiences/>
      <Materials/>
      <Testimonials/>
    </>
  );
}
