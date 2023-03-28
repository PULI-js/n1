import './Project.css';

export default function Project({title, desc, link}) {
    return (
        <div className="row" >
            <div className="cell" style={{width: "60%", textAlign: "start"}}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="cell" style={{width: "40%", textAlign: "end"}}>
                <p><u>{link}</u></p>
            </div>
        </div>
    );
};