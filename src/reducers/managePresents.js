export function managePresents(state ={numberOfPresents: 0}, action){  
        let {type} = action 
        let {numberOfPresents} = state  
        console.log("type", type)
    switch (type) {
        case 'INCREASE': 
            
            return  Object.assign({}, {numberOfPresents: numberOfPresents + 1} )
            break; 
        case 'RANDOM': 
            console.log(state)
             return   state 
             break;
        default:
            return state    
    }
}
 

