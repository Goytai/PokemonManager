import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import InputRange from 'react-input-range';
import { usePoke } from '../../hooks/poke';
import '../../styles/InputRange.css';
import mergeRefs from '../../utils/margeRef';

import * as S from './styles';

interface CpRangeData {
  min: number;
  max: number;
}

const pokeTypes = [
  'Normal',
  'Fire',
  'Fighting',
  'Water',
  'Flying',
  'Grass',
  'Poison',
  'Electric',
  'Ground',
  'Psychic',
  'Rock',
  'Ice',
  'Bug',
  'Dragon',
  'Ghost',
  'Dark',
  'Steel',
  'Fairy'
];

let timeoutFilter: null | NodeJS.Timeout = null;

const Filters = React.forwardRef<HTMLElement>((props, ref) => {
  const { filterPokemons, maxCP, minCP } = usePoke();

  const [cpRange, setCpRage] = useState<CpRangeData>({
    min: minCP,
    max: maxCP
  });
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const containerRef = useRef<HTMLElement>(null);

  const closeFilters = useCallback(() => {
    containerRef.current?.removeAttribute('open');
  }, []);

  const changeValue = useCallback(
    (value: number, field: 'min' | 'max') => {
      switch (field) {
        case 'min':
          value >= cpRange.max
            ? setCpRage({ min: cpRange.max, max: cpRange.max })
            : setCpRage({ min: value, max: cpRange.max });
          break;
        case 'max':
          value <= cpRange.min
            ? setCpRage({ min: cpRange.min, max: cpRange.min })
            : setCpRage({ min: cpRange.min, max: value });
          break;
        default:
      }
    },
    [cpRange.max, cpRange.min]
  );

  const toogleSelect = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      const checkIsExist = selectedTypes.includes(value);

      const newSelectedTypes = checkIsExist
        ? selectedTypes.filter(selectedType => selectedType !== value)
        : [...selectedTypes, value];

      setSelectedTypes(newSelectedTypes);
      filterPokemons({
        max: cpRange.max,
        min: cpRange.min,
        types: newSelectedTypes
      });
    },
    [cpRange.max, cpRange.min, filterPokemons, selectedTypes]
  );

  useEffect(() => {
    setCpRage({ max: maxCP, min: minCP });
  }, [maxCP, minCP]);

  useEffect(() => {
    timeoutFilter && clearInterval(timeoutFilter);

    timeoutFilter = setTimeout(() => {
      filterPokemons({
        max: cpRange.max,
        min: cpRange.min,
        types: selectedTypes
      });
    }, 500);
  }, [cpRange.max, cpRange.min, filterPokemons, selectedTypes]);

  return (
    <S.Container ref={mergeRefs(ref, containerRef)}>
      <VscChromeClose onClick={closeFilters} className="mobileClose" />

      <h1>Filtro</h1>
      <form>
        <h6>maxCP</h6>
        <InputRange
          minValue={minCP}
          maxValue={maxCP}
          value={cpRange}
          onChange={value => setCpRage(value as CpRangeData)}
        />
        <div className="row">
          <input
            type="number"
            min={minCP}
            max={maxCP}
            value={cpRange.min}
            name="min"
            onChange={e => changeValue(Number(e.target.value), 'min')}
          />
          <input
            type="number"
            min={minCP}
            max={maxCP}
            name="max"
            value={cpRange.max}
            onChange={e => changeValue(Number(e.target.value), 'max')}
          />
        </div>

        <h6>Types</h6>
        <div className="types">
          {pokeTypes.map(type => (
            <div className="checkbox" key={type}>
              <input
                type="checkbox"
                id={`${type}Checkbox`}
                value={type}
                onChange={toogleSelect}
              />
              <label htmlFor={`${type}Checkbox`}>{type}</label>
            </div>
          ))}
        </div>
      </form>
    </S.Container>
  );
});

export default Filters;
