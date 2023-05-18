import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Portofolio from "../../Components/Portofolio/Portofolio";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <>
        <Header></Header>
        <div className='container'>
            <About></About>
            <hr className="w-75 m-auto my-3"></hr>
            <Skills></Skills>
            <hr className="w-75 m-auto my-3"></hr>
            <Portofolio></Portofolio>
            <hr className="w-75 m-auto my-3"></hr>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Home;