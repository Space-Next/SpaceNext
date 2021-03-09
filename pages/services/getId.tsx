export const getId = async () => {
  const req = await fetch(`${server}/api/rockets`)
  const rocketData : RocketData[] = await req.json();
  const ids = rocketData.map(rocket => rocket.id)
  const paths = ids.map(id => ({params: {rocket: id}}))

  return paths
}