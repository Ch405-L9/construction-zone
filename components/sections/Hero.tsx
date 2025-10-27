import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section id="home" className="min-h-[80vh] grid place-items-center text-center bg-[url('/icons/ui/grid-square.svg')] bg-repeat">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold">Build Right. Store Smart.</h1>
        <p className="mt-3 text-lg text-neutral-700">Construction and storage solutions engineered for speed and safety.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <Button>View Services</Button>
          <Button>Get Quote</Button>
        </div>
      </div>
    </section>
  );
}
