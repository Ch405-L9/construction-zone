import { NavigationMenu } from "@/components/ui/navigation-menu";
export function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <a href="/" className="font-extrabold tracking-wide">Construction Zone</a>
        <NavigationMenu items={["Home","Services","Projects","About","Contact"]} />
      </div>
    </header>
  );
}
