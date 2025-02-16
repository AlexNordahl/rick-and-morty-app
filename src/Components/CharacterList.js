import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import axios from "axios";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (statusFilter) url += `&status=${statusFilter}`;

    axios.get(url)
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.error("Data fetching error", error));
  }, [page, statusFilter]);

  return (
    <div>
      <Filter setStatusFilter={setStatusFilter} />
      <Card.Group itemsPerRow={4}>
        {characters.map((char) => (
          <Card key={char.id} onClick={() => navigate(`/character/${char.id}`)}>
            <Image src={char.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{char.name}</Card.Header>
              <Card.Meta>{char.species} - {char.status}</Card.Meta>
              <Card.Description>{char.gender}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
