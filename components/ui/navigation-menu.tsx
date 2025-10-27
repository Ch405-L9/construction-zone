export function NavigationMenu({ items }: { items: string[] }) {
  return <nav className="flex gap-6">{items.map(i => <a key={i} href={"#"+i.toLowerCase()}>{i}</a>)}</nav>;
}
