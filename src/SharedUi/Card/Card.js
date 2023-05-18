import '../Card/Card.css';

const Card = (props) => {
    return (
        <div className="col-4 my-3">
            <div className="card shadow">
                <img src={props.imgSrc} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>{props.title}</h4>
                    <p className="card-text">{ props.description }</p>
                </div>
            </div>
        </div>
    )
}

export default Card