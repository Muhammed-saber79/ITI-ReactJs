const ProgressBar = (props) => {
    return (
        <div className="progress my-3" role="progressbar" aria-label="Success example" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{ width:`${props.ratio}%` }}>{ props.ratio }</div>
        </div>
    )
}

export default ProgressBar;