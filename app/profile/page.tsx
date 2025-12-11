import Link from "next/link";

export default function Profile(){
    return(
        <main className="p-6 font-sans">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <p className="mt-2">Nama: Syaprilla Donata</p>
            <p>NIM: 3312101092</p>
            <p>Jurusan: Teknik Informatika</p>
            <Link href="/"className="text-blue-500 hover:underline">Kembali ke Home</Link>
        </main>
    )
}