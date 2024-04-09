import './card-list-container.styles.css';

const CardListContainer = ({id,name,email }) => {
            return <div className='card-container' key={id}>
                    <img
                        alt={`monster ${name}`}
                        src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    />
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
}

export default CardListContainer;