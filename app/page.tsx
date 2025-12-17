import Footer from "./components/footer";
import Card from "./components/card";

export default function Home(){
  return (
    <>
      <div className="p-8 grid gap-6 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </>
    
  );
}