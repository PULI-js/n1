import './Qualification.css';

export default function Qualification({institution, degree, start, end, result}) {
    return (
        <div className="row">
            <div className="cell" style={{width: "80%", textAlign: "start"}}>
                <h3>{degree + ", " + institution}</h3>
                <p>{start + " - "+ end}</p>
            </div>
            <div className="cell" style={{width: "20%", textAlign: "end"}}>
                <h3>{result}</h3>
            </div>
        </div>
    );
};