export default function colorGenerator(): string {
  let randomValue = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${randomValue()},${randomValue()},${randomValue()})`;
}
