import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/logo.png" alt="Game Logo" className="mb-4" />
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Jogo seu otario</h1>
      <Link href="/game">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
          Iniciar Jogo
        </button>
      </Link>
    </div>
  );
}
