import {
  CHOOSE_LANGUAGE,
  CHOOSE_GENDER,
  CHOOSE_AGE,
  CHOOSE_HATE,
  REMOVE_HATE,
  CHOOSE_TOPICS,
  ADD_EMAIL,
  REMOVE_TOPICS,
  CONFIRM_LUST_QUIZ,
  IS_VALID_EMAIL,
  CLEAN_STORE,
  CHANGE_LNG
} from "./action";

const defaultState = {
  language: "",
  gender: "",
  age: "",
  hateArr: [],
  topicsArr: [],
  email: "",

  confirmLustQuiz: false,
  isValidEmail: false,
  lng: "en",
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return { ...state, language: action.payload };
    case CHOOSE_GENDER:
      return { ...state, gender: action.payload };
    case CHOOSE_AGE:
      return { ...state, age: action.payload };
    case CHOOSE_HATE:
      return { ...state, hateArr: [...state.hateArr, action.payload] };
    case REMOVE_HATE:
      return { ...state, hateArr: [...action.payload] };
    case CHOOSE_TOPICS:
      return { ...state, topicsArr: [...state.topicsArr, action.payload] };
    case REMOVE_TOPICS:
      return { ...state, topicsArr: [...action.payload] };
    case CONFIRM_LUST_QUIZ:
      return { ...state, confirmLustQuiz: action.payload };
    case IS_VALID_EMAIL:
      return { ...state, isValidEmail: action.payload };
    case ADD_EMAIL:
      return { ...state, email: action.payload };
    case CLEAN_STORE:
      return {
        ...state,
        language: action.payload,
        gender: action.payload,
        age: action.payload,
        hateArr: [...action.payload],
        topicsArr: [...action.payload],
        email: action.payload,
      };
    case CHANGE_LNG:
      return { ...state, lng: action.payload };
    default:
      return state;
  }
};
