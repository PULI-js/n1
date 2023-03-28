import './SideHeading.css';

export default function SideHeading({title}) {
    return (
        <div className="heading" >
            <div className="cell" style={{textAlign: "start"}}>
                <h2>{title}-</h2>
            </div>
        </div>
    );
};