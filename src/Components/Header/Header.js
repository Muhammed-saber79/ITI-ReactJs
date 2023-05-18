import { Carousel } from 'react-bootstrap';

const Header = () => {
    const imageURL = "https://picsum.photos/1920/750";

    return (
        <Carousel className='mb-5'>
            <Carousel.Item>
                <img src={ imageURL }></img>
                <Carousel.Caption>
                    <h3>My Portofolio</h3>
                    <p>Welcome To My Portofolio...</p>
                    <button  className='btn btn-outline-info'>Contact Me</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ imageURL }></img>
                <Carousel.Caption>
                    <h3>My Portofolio</h3>
                    <p>Welcome To My Portofolio...</p>
                    <button  className='btn btn-outline-info'>Contact Me</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ imageURL }></img>
                <Carousel.Caption>
                    <h3>My Portofolio</h3>
                    <p>Welcome To My Portofolio...</p>
                    <button  className='btn btn-outline-info'>Contact Me</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Header