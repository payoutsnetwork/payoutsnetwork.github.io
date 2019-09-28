import React from "react";
import { partial } from "lodash";

function getOptionComponent(disabled, item, index) {
  return (
    <option disabled={disabled} value={index} key={index}>
      {item}
    </option>
  );
}

function getStatesOptions(statesList) {
  const placeholder = "i.e. California";
  const states = statesList.data.map(state => state.name);

  const placeholderOption = getOptionComponent(true, placeholder, -1);
  const statesOptions = states.map(partial(getOptionComponent, false));

  return [placeholderOption, ...statesOptions];
}

export default { getStatesOptions };
