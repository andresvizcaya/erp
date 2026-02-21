"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      {isOpen ? (
        <div className="w-64 h-screen bg-blue-800 text-white flex flex-row transition-all duration-300">
          {/* Navegación */}
          <nav className="flex flex-col justify-between flex-1 p-2">
            <div className="flex flex-col gap-2">
              <Link href="/private/home" className="block px-3 py-2 font-bold rounded">
                SAGO
              </Link>
              <Link href="/private/dashboard" className="block px-3 py-2 hover:bg-blue-900 rounded">
                Dashboard
              </Link>
              <Link href="" className="block px-3 py-2 hover:bg-blue-900 rounded">
                Compras
              </Link>
              <Link href="" className="block px-3 py-2 hover:bg-blue-900 rounded">
                Reportes
              </Link>
            </div>
            <div>
              <Link href="" className="block px-3 py-2 hover:bg-blue-900 rounded">
                Usuarios
              </Link>
            </div>
          </nav>
          {/* Botón de cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-blue-900 hover:bg-blue-700 transition-colors"
          >
            ✕
          </button>
        </div> 
      ) : (
        /* Botón de abrir cuando el sidebar está cerrado */
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-blue-800 text-white hover:bg-blue-700 transition-colors"
        >
          ☰
        </button>
      )}
    </div>
  );
}
