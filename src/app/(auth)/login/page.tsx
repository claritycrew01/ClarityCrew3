import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left branding pane — hidden on mobile */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-muted/30 p-12">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-skill-blue text-white font-display font-bold text-2xl">
            C
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground">
            Welcome to ClarityCrew
          </h2>
          <p className="mt-3 text-muted-foreground">
            An academic study platform designed around how you learn, not the other way around.
          </p>
        </div>
      </div>

      {/* Right form pane */}
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <div className="mx-auto w-full max-w-[400px]">
          <Link href="/" className="mb-8 inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-skill-blue text-white font-display font-bold text-sm">
              C
            </div>
            <span className="font-display text-lg font-bold text-foreground">ClarityCrew</span>
          </Link>

          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-cta-orange py-2.5 text-sm font-bold text-white transition-colors hover:bg-cta-orange-hover"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup/" className="font-semibold text-skill-blue hover:underline">
              Sign up
            </Link>
          </p>

          <p className="absolute bottom-6 left-0 right-0 text-center text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
