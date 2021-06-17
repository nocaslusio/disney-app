import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import CharactersTable from '../components/CharactersTable/CharactersTable';
import styles from '../styles/Home.module.css';
import { useState } from "react";

export default function Home({ characters }) {

  const [keyword, setKeyword]= useState("");

  const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(keyword));

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
  <>
  <div className={styles.backgroundcontainer}><img className= {styles.background} src={'./capa.png'} /></div>
  <Layout>
    
    <SearchInput placeholder="SEARCH CHARACTER" onChange={onInputChange} />

    <CharactersTable characters={filteredCharacters}/>
  </Layout>
  </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.disneyapi.dev/characters');
  const characters = await res.json();

  console.log(characters.charactersdata);
  return {
    props: {
      characters : characters.data
    },
    revalidate: 10
  }
}