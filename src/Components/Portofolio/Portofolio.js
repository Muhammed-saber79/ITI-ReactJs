import Card from '../../SharedUi/Card/Card';
const cardImg = "https://picsum.photos/200"

const Portofolio = () => {
    return (
        <div className='row my-5'>
            <h3 className='text-center'>Protofolio</h3>
            <hr className="w-25 m-auto my-3"></hr>
            <p>Portofolio Paragraph Test...</p>
            <Card
                title="HTML"
                imgSrc={cardImg}
                description="html web design..." 
            ></Card>
            <Card 
                title="CSS"
                imgSrc={cardImg}
                description="CSS web design..." 
            ></Card>
             <Card 
                title="JS"
                imgSrc={cardImg}
                description="JS web design..." 
            ></Card>
            <Card
                title="Node Js"
                imgSrc={cardImg}
                description="Node Js web design..." 
            ></Card>
            <Card 
                title="Express"
                imgSrc={cardImg}
                description="Express web design..." 
            ></Card>
             <Card 
                title="Laravel"
                imgSrc={cardImg}
                description="Laravel web design..." 
            ></Card>
        </div>
    )
}

export default Portofolio;