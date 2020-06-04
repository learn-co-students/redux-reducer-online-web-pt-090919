export function manageFriends(state, action){
  state = {friends: []}
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: state.friends.push({name: "Chrome Boi"
      homewtown: "NYC",
      id: 1}})
    case "REMOVE_FRIEND":
      return {friends: state.friends.pop()}
      default:
      return state
  }
}
