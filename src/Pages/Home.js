import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import StatsSection from "../Components/StatsSection";
import MotivateSection from "../Components/MotivateSection";
import SearchSection from "../Components/SearchSection";
import { ChallengesSection } from "../Components/ChallengesSection";
const Home = ({ data, Deleted, Editchllg, newChallenge }) => {
  const [filter, setFilter] = useState([]);
  const [SearchData, setSearchData] = useState();

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <MotivateSection />
      <SearchSection
        filter={filter}
        setFilter={setFilter}
        setSearchData={setSearchData}
      />
      <ChallengesSection
        filter={filter}
        SearchData={SearchData}
        data={data}
        Deleted={Deleted}
        Editchllg={Editchllg}
        newChallenge={newChallenge}
      />
    </div>
  );
};

export default Home;
