export default ({ dispatch }) => next => action => {
    // Check to see if the action has a promise on its payload property
    // If so wait to resolve
    // Else send the action onto the next middleware
    
    if (!action.payload || !action.payload.then) {
        return next(action);
    }
}