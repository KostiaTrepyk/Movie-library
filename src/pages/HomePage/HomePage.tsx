import UpcomingSection from "./sections/UpcomingSection";
import GreetingSection from "./sections/GreetingSection";

const HomePage: React.FC = () => {
    return (
        <>
            <GreetingSection />

            <UpcomingSection />
        </>
    );
};

export default HomePage;
