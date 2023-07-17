const getInput = () => {
  const n = +process.argv[2];
  const x = +process.argv[3];
  const a = process.argv.slice(4, process.argv.length).map(el => +el);

  return { n, x, a};
};