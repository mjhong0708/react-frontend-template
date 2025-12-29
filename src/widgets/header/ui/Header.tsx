export function Header({ title }: { title: string }) {
  return (
    <header className="bg-card/40 border-b">
      <div className="mx-auto flex w-full max-w-screen items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-2">
          <a href="/">
            <img alt="logo" src="/logo.svg" className="h-10 w-10" />
          </a>
          <div>
            <h1 className="text-xl font-medium sm:text-2xl">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
