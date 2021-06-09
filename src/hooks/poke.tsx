import { useQuery, gql } from '@apollo/client';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

export interface PokemonData {
  id: string;
  number: string;
  name: string;
  image: string;
  maxCP: number;
  types: string[];
}

interface FilterPokemons {
  min: number;
  max: number;
  types: string[];
}

interface PokeContextData {
  filteredPokemons: PokemonData[];
  maxCP: number;
  minCP: number;
  filterPokemons(filters: FilterPokemons): void;
  refreshPokemons(): void;
}

const EXCHANGE_RATES = gql`
  query {
    pokemons(first: 154) {
      id
      number
      name
      image
      maxCP
      types
    }
  }
`;

const PokeContext = createContext({} as PokeContextData);

export const PokeProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonData[]>([]);

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  const { minCP, maxCP } = useMemo(() => {
    const max = pokemons.reduce((currentMin, pokemon) => {
      return currentMin > pokemon.maxCP ? currentMin : pokemon.maxCP;
    }, 0);

    const min = pokemons.reduce((currentMin, pokemon) => {
      return currentMin < pokemon.maxCP ? currentMin : pokemon.maxCP;
    }, max);

    return { minCP: min, maxCP: max };
  }, [pokemons]);

  const refreshPokemons = useCallback(() => {
    if (!loading && !error) {
      setPokemons(data.pokemons);
    }
  }, [data, error, loading]);

  const filterPokemons = useCallback(
    ({ min, max, types }: FilterPokemons) => {
      const newPokemons = pokemons.filter(pokemon => {
        if (pokemon.maxCP >= min && pokemon.maxCP <= max) {
          return types.length !== 0
            ? types.some(type => pokemon.types.includes(type))
            : true;
        }
        return false;
      });

      setFilteredPokemons(newPokemons);
    },
    [pokemons]
  );

  useEffect(() => {
    refreshPokemons();
  }, [refreshPokemons]);

  useEffect(() => {
    filterPokemons({
      max: maxCP,
      min: minCP,
      types: []
    });
  }, [filterPokemons, maxCP, minCP]);

  return (
    <PokeContext.Provider
      value={{
        filteredPokemons,
        minCP: minCP || 2000,
        maxCP: maxCP || 2001,
        filterPokemons,
        refreshPokemons
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export function usePoke(): PokeContextData {
  const context = useContext(PokeContext);

  if (!context) {
    throw new Error('usePoke must be used within an PokeProvider');
  }

  return context;
}
