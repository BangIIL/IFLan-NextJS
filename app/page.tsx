import Link from "next/link";
export default function Home(){
  return(
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 font-sans">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">  
          Welcome 🚀
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Selamat datang dihalaman utama Next.js dengan Tailwind CSS.
          Desain ini dibuat lebih bersih, modern, dan nyaman dilihat.
        </p>

        <nav className="mt-8 flex items-center justify-center space-x-6">
          <Link 
            href="/about"
              className="text-blue-600 font-medium hover:text-blue-800 transition"
            >
              About
          </Link>
          <Link 
            href="/profile"
              className="text-blue-600 font-medium hover:text-blue-800 transition"
            >
              Profile
          </Link>
        </nav>

        <div className="mt-10">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition" >
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}
