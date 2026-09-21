import Header from "../components/header";
import TopStory from "../components/topStory";
import CardStory from "../components/CardStory";

function Home() {
  return (
    <>
      <Header />

      <TopStory />

      <section className="px-6 py-6">
        <h1 className="text-2xl font-bold">
          MORE STORIES
        </h1>

        <CardStory />
      </section>
    </>
  );
}

export default Home;