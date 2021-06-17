import Layout from "../../components/Layout/Layout";
import styles from './Character.module.css';

const Character = ({character}) => {
  return (
    <Layout title={character.name}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.overview_panel}>
            <img src={character.imageUrl} alt={character.name}></img>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>Details</h4>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Name</div>
              <div className={styles.details_panel_value}>
                {character.name}
              </div>
            </div>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Shortfilm</div>
              <div className={styles.details_panel_value}>
                {character.shortFilms}
              </div>
            </div>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Tvshow</div>
              <div className={styles.details_panel_value}>
                {character.tvShows}
              </div>
            </div>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Allies</div>
              <div className={styles.details_panel_value}>
                {character.allies}
              </div>
            </div>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Enemies</div>
              <div className={styles.details_panel_value}>
                {character.enemies}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Character;

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}){
    const res = await fetch(`https://api.disneyapi.dev/characters/${params.id}`);

    const character = await res.json();

    return {
        props: {
            character,
        },
    }
}
