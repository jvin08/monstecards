
import './card.styles.css';

const Card = ({ monster }) =>  {
    const { id, name, email } = monster;
    return (
        <div className="card-container" key={id}>
            <img 
                alt={`monster ${name}`} 
                src={`https://raw.githubusercontent.com/jvin08/monster-pictures/main/monster_${id}.jpg`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
    }

export default Card;