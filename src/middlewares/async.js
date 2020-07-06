export default ({ dispatch }) => next => action => {
    // Check to see if the action has a promise on its payload property
    // If so wait to resolve
    // Else send the action onto the next middleware
    
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // Wait for the promise to resolve
    // Get data and create a new action with the data and dispatch
    action.payload.then(function(response) {
        const newAction = {...action, payload: response };
        dispatch(newAction);
    });

}