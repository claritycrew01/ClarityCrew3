export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
      <a
        href="/home/"
        className="mt-6 inline-flex items-center rounded-full bg-skill-blue-solid px-6 py-2.5 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
      >
        Go Home
      </a>
    </div>
  );
}
