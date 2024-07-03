export const CHOOSE_LANGUAGE = "CHOOSE_LANGUAGE";
export const CHOOSE_GENDER = "CHOOSE_GENDER";
export const CHOOSE_AGE = "CHOOSE_AGE";
export const CHOOSE_HATE = "CHOOSE_HATE";
export const CHOOSE_TOPICS = "CHOOSE_TOPICS";
export const ADD_EMAIL = "ADD_EMAIL";
export const REMOVE_HATE = "REMOVE_HATE";
export const REMOVE_TOPICS = "REMOVE_TOPICS";
export const CONFIRM_LUST_QUIZ = "CONFIRM_LUST_QUIZ";
export const IS_VALID_EMAIL = "IS_VALID_EMAIL";
export const CLEAN_STORE = "CLEAN_STORE";
export const CHANGE_LNG = "CHANGE_LNG";

export const chooseLanguage = (payload) => {
  return { type: CHOOSE_LANGUAGE, payload: payload };
};
export const chooseGender = (payload) => {
  return { type: CHOOSE_GENDER, payload: payload };
};
export const chooseAge = (payload) => {
  return { type: CHOOSE_AGE, payload: payload };
};
export const chooseHate = (payload) => {
  return { type: CHOOSE_HATE, payload: payload };
};
export const removeHate = (payload) => {
  return { type: REMOVE_HATE, payload: payload };
};
export const chooseTopics = (payload) => {
  return { type: CHOOSE_TOPICS, payload: payload };
};
export const addEmail = (payload) => {
  return { type: ADD_EMAIL, payload: payload };
};
export const removeTopics = (payload) => {
  return { type: REMOVE_TOPICS, payload: payload };
};
export const confirmLustQuiz = (payload) => {
  return { type: CONFIRM_LUST_QUIZ, payload: payload };
};
export const isValidEmail = (payload) => {
  return { type: IS_VALID_EMAIL, payload: payload };
};
export const cleanStore = (payload) => {
  return { type: CLEAN_STORE, payload: payload };
};
export const changeLng = (payload) => {
  return { type: CHANGE_LNG, payload: payload };
};
