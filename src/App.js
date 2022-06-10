import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";
import Accordion from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
            <div>Article 1</div>
            <Rating value={2}/>
            <div>Article 2</div>
            <Rating value={3}/>
            <Accordion titleValue={"This is ACC1"} collapsed={false}/>
            <Accordion titleValue={"This is ACC number 2"} collapsed={true}/>
        </div>
    );
}

export default App;
