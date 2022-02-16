import { useEffect, useState } from 'react';
import Text from '../../components/Text';
import api from '../../services/api';
import { Box, Divisao } from './styles';

function Dashboard() {
  const [pokemon, setPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState('pokemon?offset=20&limit=20');

  useEffect(() => {
    async function getItems() {
      const { data } = await api.get('pokemon');

      const resp = await Promise.all(data.results.map((item) => api.get(item.url)));

      const format = resp.map((req) => req.data);

      setPokemon(format);
    }

    getItems();
  }, []);

  const getMore = async () => {
    const { data } = await api.get(loadMore);
    const resp = await data.next;

    setLoadMore(resp);

    const morePoke = await Promise.all(data.results.map((item) => api.get(item.url)));

    const formatMore = morePoke.map((req) => req.data);
    setPokemon(formatMore);
  };

  return (
    <div>
      <Text as="h1">Pokédex</Text>
      <Text>Search for Pokémon by name or using National Pokédex number</Text>
      {
        pokemon.length > 0 && pokemon.map((item) => (
          <Divisao key={item.id}>
            <Box>
              <p>#{item.id}</p>

              {item.name}

              <img src={item.sprites.front_default} alt={item.name} />
            </Box>
          </Divisao>
        ))
      }
      <div>
        <button type="button" onClick={() => getMore()}>LOAD MORE</button>
      </div>
    </div>
  );
}

export default Dashboard;
