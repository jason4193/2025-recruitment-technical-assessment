import Nav from "../components/Nav";
import FunctionsBar from "@/components/FunctionsBar";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <FunctionsBar />
    </div>
  );
}
