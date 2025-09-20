// Découpe un tableau en n sous-tableaux
function splitArrayIntoChunks<T>(array: T[], n: number): T[][] {
  const result: T[][] = Array.from({ length: n }, () => []);
  array.forEach((item, index) => {
    result[index % n].push(item); // Répartit en round-robin
  });
  return result;
}

export default splitArrayIntoChunks;
