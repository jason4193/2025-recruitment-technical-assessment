import Nav from "@/components/Nav";
import FunctionsBar from "@/components/FunctionsBar";
import BuildingSection from "@/components/BuildingSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <FunctionsBar />
      <BuildingSection />
    </div>
  );
}
