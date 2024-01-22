export default function Home() {
  async function getData() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
    console.log(data.results[0].name.first);
  }
  getData();
  return <div>hi</div>;
}
const data = {
  result: {},
  info: {},
};
