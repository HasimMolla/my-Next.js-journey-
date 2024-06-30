import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container max-w-screen-xl mx-auto flex items-center justify-between py-10">
          <div>
            <h1 className="text-6xl font-black font-sans leading-2">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-md rounded-full py-6 px-5 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image
              alt="pizza-main"
              src={"/pizza-main.png"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}