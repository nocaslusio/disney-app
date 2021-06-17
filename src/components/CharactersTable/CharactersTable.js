import styles from "./CharactersTable.module.css";
import Link from 'next/link';

const CharactersTable = ({characters}) => {

const charactersArray = Object.values(characters)

return (
  <div>
  <div className={styles.categories}>
    <div className={styles.categories_photo}></div>
    
    <button className={styles.categories_name}>
      <div>Name</div>
    </button>
    <button className={styles.categories_tvshows}>
      <div>Tvshows</div>
    </button>
  </div>

  
  {charactersArray.map((character) => {

    return(
      <Link key={character._id} href={`character/${character._id}`}>
      <a>
        <div className={styles.details}>
          <div className={styles.photo}><img src={character.imageUrl} alt={character.name} /></div>
          <div className={styles.name}>{character.name}</div>
          <div className={styles.tvshows}>{character.tvShows}</div>
        </div>
      </a>
      </Link>
    )
  })}
    </div>
  );
}

export default CharactersTable;