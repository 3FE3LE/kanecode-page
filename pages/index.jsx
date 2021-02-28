import Head from "next/head";

// Components
import MainForm from "./components/MainForm";

// third libraries
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>KANECODE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="main__carousel">
          <Carousel
            isSelected={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            stopOnHover={true}
            showStatus={false}
          >
            <div>
              <img src="Foto.png" alt="" />
            </div>
            <div>
              <img src="Foto1.png" alt="" />
            </div>
            <div>
              <img src="Foto2.png" alt="" />
            </div>
            <div>
              <img src="Foto3.png" alt="" />
            </div>
          </Carousel>
        </div>
        <div className="main__form">
          <MainForm/>
        </div>
      </main>
    </>
  );
}
