import './Skills.css';

export default function Skills({skills}) {
    return (
        <div className="row" >
            <div className="cell" style={{width: "100%", textAlign: "start"}}>
                <ul>
                    {
                        skills.map((s) => (
                            <li>{s}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};