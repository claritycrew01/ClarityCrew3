"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth-store";

export default function SignupPage() {
  const router = useRouter();
  const signup = useAuthStore((s) => s.signup);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

      setTimeout(() => {
        const result = signup(firstName, lastName, email, password);
        if (result.success) {
          router.push("/onboarding/");
        } else {
          setError(result.error ?? "Signup failed.");
          setLoading(false);
        }
      }, 400);
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left branding pane */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-muted/30 p-12">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-skill-blue-solid text-skill-blue-on-solid font-display font-bold text-2xl">
            C
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground">
            Start your learning journey
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join thousands of learners who study with clarity and confidence.
          </p>
        </div>
      </div>

      {/* Right form pane */}
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <div className="mx-auto w-full max-w-[400px]">
          <Link href="/" className="mb-8 inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-skill-blue-solid text-skill-blue-on-solid font-display font-bold text-sm">
              C
            </div>
            <span className="font-display text-lg font-bold text-foreground">ClarityCrew</span>
          </Link>

          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            Get Started
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your account
          </p>

          {error && (
            <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-foreground">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-foreground">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-cta-orange py-2.5 text-sm font-bold text-cta-orange-on-solid transition-colors hover:bg-cta-orange-hover disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login/" className="font-semibold text-skill-blue-text hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
