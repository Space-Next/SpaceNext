import { Planet } from 'react-planet';

export function PlanetButton() {
  return (
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
          Enter Space Next
        </div>
      }
      orbitRadius={250}
      hideOrbit={false}
      rotation={45}
      autoClose
    >
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
      />
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
      />
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
      />
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
      />
    </Planet>
  );
}
