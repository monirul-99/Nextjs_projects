import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Button variant={"destructive"} className="">
        Get Started
      </Button>
      <h2 className="text-left text-5xl text-indigo-400 py">Hello partner</h2>
    </main>
  );
}
