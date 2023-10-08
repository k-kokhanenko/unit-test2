export default function sortHeroesList(obj) {
  return obj.sort((a, b) => parseInt(b.health, 2) - parseInt(a.health, 2));
}
