import Nav from "../components/navigation/Nav"
import Playground from "../components/playground/Playground"

const Home: React.FC = () => {
    return (
        <div>
            <div className="mx-8 py-2">
                <div><Nav /></div>
            </div>
            <div><Playground /></div>
        </div>
    );
}

export default Home
