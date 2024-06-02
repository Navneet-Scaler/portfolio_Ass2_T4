import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Conatactme from "./components/contactme/conatctme";

const App = () => {

    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <Conatactme />
        </div>
    );
};

export default App;