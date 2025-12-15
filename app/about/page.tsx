import Navbar from "../components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-screen-xl mx-auto px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Komponen 1"
            description="Ini adalah komponen pertama"
            image="https://media.istockphoto.com/id/1003196328/id/foto/pagoda-chureito-dan-gunung-fuji-saat-matahari-terbenam.jpg?s=612x612&w=0&k=20&c=ZsDuwYe5rGW5oCyqBB-rcWrYDZ41Isuy9nJTJ80cu7Q="
          />
          <Card
            title="Komponen 2"
            description="Ini adalah komponen kedua"
            image="https://media.istockphoto.com/id/904453184/id/foto/gambar-komposit-gunung-fuji-dan-cakrawala-tokyo.jpg?s=612x612&w=0&k=20&c=qnQwmtYOHIiJu-3gIXDRZOCnVNWGgVm4i2E8QMIz_UA="
          />
        </section>
      </main>
    </>
  );
}
