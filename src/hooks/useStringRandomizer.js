import { trackEvent } from "../utils/analytics";
import { POSSIBLE_RANDOM_QUESTIONS } from "../utils/constants";

const useStringRandomizer = (setStringValue, getSearchResult) => {
    trackEvent('User Interaction', 'Clicked Button', 'String randomizer');
    const generateRandomString = () => {
        const randomString = POSSIBLE_RANDOM_QUESTIONS[Math.floor(Math.random()*POSSIBLE_RANDOM_QUESTIONS.length)];
        setStringValue(randomString);
        getSearchResult(randomString)
      };
    
  return { generateRandomString};
};

export default useStringRandomizer;
