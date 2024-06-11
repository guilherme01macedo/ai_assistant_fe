import { POSSIBLE_RANDOM_QUESTIONS } from "../utils/constants";

const useStringRandomizer = (setStringValue) => {
    const generateRandomString = () => {
        setStringValue(POSSIBLE_RANDOM_QUESTIONS[Math.floor(Math.random()*POSSIBLE_RANDOM_QUESTIONS.length)]);
      };
    
  return { generateRandomString};
};

export default useStringRandomizer;
