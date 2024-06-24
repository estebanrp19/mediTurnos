import { Footer } from "../components/Footer";
import { ImageHero } from "../components/ImageHero";
import { Navbar } from "../components/Navbar";
import { ScheduleAppointment } from "../components/ScheduleAppointment";

export const Home = () => {
    return (
      <div>
        <Navbar />
        <ImageHero />
        <ScheduleAppointment />
        <Footer />
      </div>
    );
};