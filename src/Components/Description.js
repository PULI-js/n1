import './Description.css';

export default function Description({content}) {
    return (
        <div className="row" >
            <div className="cell" style={{width: "100%", textAlign: "start"}}>
                <p>{content}</p>
            </div>
        </div>
    );
};