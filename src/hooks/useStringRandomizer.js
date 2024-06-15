import { trackEvent } from "../utils/analytics";
import { POSSIBLE_RANDOM_QUESTIONS } from "../utils/constants";

const useStringRandomizer = (setStringValue) => {
    trackEvent('User Interaction', 'Clicked Button', 'String randomizer');
    const generateRandomString = () => {
        setStringValue(POSSIBLE_RANDOM_QUESTIONS[Math.floor(Math.random()*POSSIBLE_RANDOM_QUESTIONS.length)]);
      };
    
  return { generateRandomString};
};

export default useStringRandomizer;
