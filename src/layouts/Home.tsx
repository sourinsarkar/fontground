import Nav from "../components/Nav"
import Playground from "../components/Playground"

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col bg-pg-grid">
            <div><Nav /></div>
            <div className="flex items-center justify-center grow"><Playground /></div>
        </div>
    );
}

export default Home
