import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => setCharacter(response.data))
      .catch((error) => console.error("Data fetching error", error));
  }, [id]);

  if (!character) return <p>Ładowanie...</p>;

  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{character.species} - {character.status}</Card.Meta>
        <Card.Description>
          <strong>Płeć:</strong> {character.gender} <br />
          <strong>Pochodzenie:</strong> {character.origin.name} <br />
          <strong>Lokalizacja:</strong> {character.location.name}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CharacterDetails;
