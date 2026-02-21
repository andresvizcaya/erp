"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/private/home",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-2">Iniciar sesión</h1>
      <p className="text-gray-600 mb-6">Accede a tu cuenta para continuar</p>
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded shadow-md w-80"
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-3 py-2 hover:bg-blue-700"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
