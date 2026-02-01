import { NavLink, Outlet } from "react-router-dom";

const navLinkBase =
  "block rounded-md px-3 py-2 text-sm font-medium transition-colors";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    navLinkBase,
    isActive
      ? "bg-white/10 text-white"
      : "text-white/90 hover:bg-white/10 hover:text-white",
  ].join(" ");

export function AppLayout() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="flex min-h-screen">
        <aside className="w-64 bg-sidebar px-4 py-6">
          <div className="mb-6 text-title text-lg font-semibold">
            Navigation
          </div>

          <nav className="space-y-2">
            <NavLink to="/perfumes" className={navLinkClass}>
              Our perfumes
            </NavLink>
            <NavLink to="/collections/peak" className={navLinkClass}>
              Peak perfumes
            </NavLink>
            <NavLink to="/collections/not-good" className={navLinkClass}>
              Not good
            </NavLink>
            <NavLink to="/season" className={navLinkClass}>
              Best for season
            </NavLink>
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="bg-topbar px-6 py-5">
            <h1 className="text-title text-3xl font-extrabold tracking-tight">
              ParfümWiki
            </h1>
          </header>

          <main className="flex-1 py-8 text-textmain">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
