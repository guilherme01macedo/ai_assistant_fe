import { useState } from "react";
import { trackEvent } from "../utils/analytics";
import { POSSIBLE_RANDOM_QUESTIONS } from "../utils/constants";

const useStringRandomizer = (setStringValue, getSearchResult) => {
    const [lastSearched, setLastSearched] = useState('');

    const generateRandomString = () => {
        const filteredPossibleQuestions = POSSIBLE_RANDOM_QUESTIONS.filter(a=>a!==lastSearched)
        trackEvent('User Interaction', 'Clicked Button', 'String randomizer');
        const randomString = filteredPossibleQuestions[Math.floor(Math.random()*filteredPossibleQuestions.length)];
        setStringValue(randomString);
        getSearchResult(randomString);
        setLastSearched(randomString);
      };
    
  return { generateRandomString};
};

export default useStringRandomizer;
