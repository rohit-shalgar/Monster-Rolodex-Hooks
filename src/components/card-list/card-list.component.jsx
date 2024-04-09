import CardListContainer from "./card-list-container.component";
import './card-list.styles.css'

const CardList = ({monsters}) => {
            return <div className='card-list'>
                        {monsters.map((monster) => {
                            const { id, name, email } = monster;
                            return (
                                <CardListContainer id={id} name={name} email={email} />
                            );
                        })}
                    </div>       
    }      

export default CardList;