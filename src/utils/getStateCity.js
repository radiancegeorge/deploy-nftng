import { State, City } from "country-state-city";
const state = State.getStatesOfCountry("NG");

const getCity = (stateId) => {
  City.getCitiesOfState("NG", stateId);
};

export { state, getCity };
