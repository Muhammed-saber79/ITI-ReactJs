import ProgressBar from "../../SharedUi/ProgressBar/ProgressBar"

const Skills = () => {
    return (
        <>
        <div className="row my-5 text-center">
            <h4>Skills</h4>
            <hr className="w-25 m-auto my-3"></hr>

            <div className="row">
                <div className="col-sm-12 col-lg-4 my-3">
                    <h5>My Focus</h5>
                    <hr></hr>
                    <ul className="list-group">
                        <li className="list-group-item">HTML</li>
                        <li className="list-group-item">CSS</li>
                        <li className="list-group-item">JS</li>
                        <li className="list-group-item">NodeJs</li>
                        <li className="list-group-item">Laravel</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-lg-8 my-3">
                    <ProgressBar ratio="75" />
                    <ProgressBar ratio="67" />
                    <ProgressBar ratio="78" />
                    <ProgressBar ratio="98" />
                    <ProgressBar ratio="68" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills