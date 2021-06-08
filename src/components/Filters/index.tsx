import React, { useCallback, useState } from 'react';
import InputRange from 'react-input-range';
import '../../styles/InputRange.css';

import * as S from './styles';

interface CpRangeData {
  min: number;
  max: number;
}

const pokeTypes = [
  'normal',
  'fire',
  'fighting',
  'water',
  'flying',
  'grass',
  'poison',
  'electric',
  'ground',
  'psychic',
  'rock',
  'ice',
  'bug',
  'dragon',
  'ghost',
  'dark',
  'steel',
  'fairy'
];

const Filters: React.FC = () => {
  const [cpRange, setCpRage] = useState<CpRangeData>({ min: 525, max: 2512 });

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

  return (
    <S.Container>
      <h1>Filtro</h1>
      <form>
        <h6>maxCP</h6>
        <InputRange
          maxValue={4431}
          minValue={274}
          value={cpRange}
          onChange={value => setCpRage(value as CpRangeData)}
        />
        <div className="row">
          <input
            type="number"
            min={274}
            max={4431}
            value={cpRange.min}
            name="min"
            onChange={e => changeValue(Number(e.target.value), 'min')}
          />
          <input
            type="number"
            min={274}
            max={4431}
            name="max"
            value={cpRange.max}
            onChange={e => changeValue(Number(e.target.value), 'max')}
          />
        </div>

        <h6>Types</h6>
        <div className="types">
          {pokeTypes.map(type => (
            <div className="checkbox" key={type}>
              <input type="checkbox" id={`${type}Checkbox`} value={type} />
              <label htmlFor={`${type}Checkbox`}>{type}</label>
            </div>
          ))}
        </div>
      </form>
    </S.Container>
  );
};

export default Filters;
