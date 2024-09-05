import Header from "./components/Header";
import Social from "./components/Social";


export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <div
        className="p-4 w-full flex flex-row justify-center"
      >
        <Social />
      </div>
    </div>
  );
}
