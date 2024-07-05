import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-24 px-10">
      <Image
        src="/assets/home-page-img.jpg"
        alt="home-page-img"
        fill
        className="z-0 object-cover"
      />

      <div className="z-10 text-black flex flex-col items-center text-center gap-4 px-6">
        <h1 className="text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
          Make a difference today
        </h1>
        <p className="text-xl">
          Find communities to support by clicking the button below
        </p>
        <Button className="z-10" variant="default" size="lg" asChild>
          <Link href="/charities">Search Now</Link>
        </Button>
      </div>
    </section>
  );
}
