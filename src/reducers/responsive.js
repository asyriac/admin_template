const initialState = {
  sidebarShow: "responsive",
};

export default function responsive(state = initialState, { type, ...rest }) {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
}
