// @flow
import { Phone } from '../../flowTypes';

type Action = {
  +type: string,
  +phones: Array<Phone>,
};

export type State = Array<Phone>;

const phones = (state: State = [], action: Action) => {
  switch (action.type) {
    case 'SET_PHONES':
      return [...action.phones];
    default:
      return state;
  }
};

export default phones;
