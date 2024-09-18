import Itinerary from "@compoents/Itinerary";

import HomeBanner from "@compoents/Home";

function Home() {
  return (
    <div className="container">
     <HomeBanner />
      <Itinerary/>
    </div>
  );
}

export default Home;
