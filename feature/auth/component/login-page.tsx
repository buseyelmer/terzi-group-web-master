"use client";

import { ArrowRight, Loader2, Smartphone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authContent } from "../data/content";
import { sendLoginCode, verifyLoginCode } from "../lib/auth-api";
import { AuthButton, AuthInput } from "./auth-field";
import { AuthShell } from "./auth-shell";

type LoginPhase = "phone" | "code" | "success";

function normalizePhone(value: string) {
  return value.replace(/\s/g, "");
}

function isValidPhone(value: string) {
  return /^\+?[0-9]{10,15}$/.test(normalizePhone(value));
}

export function LoginPage() {
  const router = useRouter();
  const { login } = authContent;

  const [phase, setPhase] = useState<LoginPhase>("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSendCode(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!phone.trim()) {
      setError(login.errors.phoneRequired);
      return;
    }
    if (!isValidPhone(phone)) {
      setError(login.errors.phoneInvalid);
      return;
    }

    setLoading(true);
    const result = await sendLoginCode(normalizePhone(phone));
    setLoading(false);

    if (result.ok) {
      setPhase("code");
      return;
    }

    setPhase("code");
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!code.trim()) {
      setError(login.errors.codeRequired);
      return;
    }

    setLoading(true);
    const result = await verifyLoginCode(normalizePhone(phone), code.trim());
    setLoading(false);

    if (!result.ok) {
      setError(login.errors.verifyFailed);
      return;
    }

    if (result.data) {
      localStorage.setItem("token", result.data);
    }

    setPhase("success");
    setTimeout(() => router.push("/"), 1200);
  }

  return (
    <AuthShell
      title={login.title}
      subtitle={login.subtitle}
      footer={
        <>
          {login.noAccount}{" "}
          <Link href="/kayit" className="font-semibold text-brand hover:text-brand-dark">
            {login.registerLink}
          </Link>
        </>
      }
    >
      {phase === "success" ? (
        <div className="rounded-xl border border-brand/20 bg-brand-lighter/40 px-6 py-10 text-center">
          <p className="text-base font-medium text-brand-dark">{login.success}</p>
        </div>
      ) : phase === "phone" ? (
        <form onSubmit={handleSendCode} className="space-y-5">
          <AuthInput
            label={login.phoneLabel}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={login.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={error ?? undefined}
          />

          <AuthButton type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Smartphone className="h-4 w-4" />
            )}
            {login.sendCode}
          </AuthButton>
        </form>
      ) : (
        <form onSubmit={handleVerify} className="space-y-5">
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{phone}</span>{" "}
              {login.codeSubtitle}
            </p>
            <button
              type="button"
              onClick={() => {
                setPhase("phone");
                setCode("");
                setError(null);
              }}
              className="mt-2 text-sm font-medium text-brand hover:text-brand-dark"
            >
              {login.changePhone}
            </button>
          </div>

          <AuthInput
            label={login.codeLabel}
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            placeholder="000000"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            error={error ?? undefined}
          />

          <AuthButton type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
            {login.verify}
          </AuthButton>

          <button
            type="button"
            disabled={loading}
            onClick={() => handleSendCode({ preventDefault: () => {} } as React.FormEvent)}
            className="w-full text-center text-sm font-medium text-gray-500 transition-colors hover:text-brand"
          >
            {login.resend}
          </button>
        </form>
      )}
    </AuthShell>
  );
}
