import { Planet } from 'react-planet';

export function PlanetButton(props) {
  const { text, orbits } = props;
  return (
    <div className="flex items-center justify-center">
      <Planet
        centerContent={
          <div
            style={{
              height: 200,
              width: 200,
              borderRadius: '50%',
              backgroundColor: '#1da8a4',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {text}
          </div>
        }
        orbitRadius={250}
        hideOrbit={false}
        rotation={45}
        autoClose
      >
        {orbits.map((planet) => (
          <div
            style={{
              height: 70,
              width: 70,
              borderRadius: '50%',
              backgroundColor: '#9257ad',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {planet}
          </div>
        ))}
      </Planet>
    </div>
  );
}
