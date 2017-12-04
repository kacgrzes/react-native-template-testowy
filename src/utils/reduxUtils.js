const createApiCall = ({
  actionType,
  apiCall
}) => (apiConfig = {}) => async (dispatch, getState) => {
  try {
    dispatch({
      type: `${actionType}_REQUEST`
    })
    const payload = await apiCall(apiConfig)
    dispatch({
      type: `${actionType}_SUCCESS`,
      payload,
      apiConfig
    })
    return payload
  } catch (error) {
    dispatch({
      type: `${actionType}_FAILURE`,
      payload: new Error(error),
      error: true
    })
    throw error
  }
}

const createListReducer = (listName = '') => {
  const initState = {
    isLoading: false,
    items: []
  }

  return (state = initState, action) => {
    switch (action.type) {
      case `${listName}_REQUEST`:
        return {
          ...state,
          isLoading: true
        }
      case `${listName}_SUCCESS`:
        return {
          ...state,
          items: action.payload,
          isLoading: false
        }
      case `${listName}_FAILURE`:
        return {
          ...state,
          isLoading: false
        }
      default: return state
    }
  }
}

const unpackPayloadItems = (state, action) => {
  if (action.payload && action.payload.page && action.payload.items) {
    return action.payload.page === 1
      ? [...action.payload.items]
      : [...state.items, ...action.payload.items]
  }
}

const createPaginationReducer = (listName = '') => {
  const initState = {
    items: null,
    isLoading: false,
    pages: 0
  }

  return (state = initState, action) => {
    switch (action.type) {
      case `${listName}_REQUEST`:
        return {
          ...state,
          ...action.payload,
          isLoading: true
        }
      case `${listName}_SUCCESS`:
        return {
          ...state,
          ...action.payload,
          items: unpackPayloadItems(state, action),
          isLoading: false
        }
      case `${listName}_FAILURE`:
        return {
          ...state,
          ...action.payload,
          items: state.items === null ? [] : [...state.items],
          isLoading: false
        }
      case `${listName}_RESET`:
        return {
          ...state,
          items: null,
          isLoading: false
        }
      default: return state
    }
  }
}

export {
  createApiCall,
  createListReducer,
  createPaginationReducer
}
