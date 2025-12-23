import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

export default function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1208px] mt-[130px] min-h-screen mx-auto">
        <Carousel />
      </div>
    </>
  );
}
