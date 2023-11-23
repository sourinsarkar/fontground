import Nav from "../components/navigation/Nav"
import Playground from "../components/playground/Playground"

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="mx-8 py-2">
                <div><Nav /></div>
            </div>
            <div className="flex items-center justify-center bg-green-300 w-pg"><Playground /></div>
        </div>
    );
}

export default Home
