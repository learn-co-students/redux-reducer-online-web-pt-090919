export function manageFriends(state = {friends: []}, action){ 
    let {type, friend, id} = action  
    let {friends} = state 
    let newFriends = Object.assign({}, {nuFriends: state.friends}) 
    let {nuFriends} = newFriends   
    
    switch(type){
        case 'ADD_FRIEND': 
        state.friends.push(friend)
        return state
        case 'REMOVE_FRIEND': 
        console.log("state on ln 12", state)
        let { friends: newFris} = state; 
        return Object.assign({}, {
                friends: state.friends.filter((friend) => friend.id !== id)
}) 
        
      
        
        const callBack = (fri, i) => (fri.id === id) ; 
           let x =  finalFriendList.findIndex(callBack) 
             
             finalFriendList.splice(x, 1)   
             console.log("state on line 22", state, "new State", newState)
            return newState
               
             break; 
        case 'RANDOM': 
        return state  
        break; 
        default:  
        return state 
    }
}


