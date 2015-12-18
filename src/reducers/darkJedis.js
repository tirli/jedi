const LOAD = 'jedi/darkJedis/LOAD';
const LOAD_SUCCESS = 'jedi/darkJedis/LOAD_SUCCESS';
const LOAD_FAIL = 'jedi/darkJedis/LOAD_FAIL';

const initialState = {
  loaded: false,
};

export default function darkJedis(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function load(id) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('http://jedi.smartjs.academy/dark-jedis/' + id).then(),
  };
}
