import actionTypes from './actionTypes'

import { initialState } from './storeObject'

const Common = (state = initialState, action) => {
    // console.log(`${action}commonreducer`)

    switch (action.type) {
        case actionTypes.SET_CUSTOMER_ID:
            {
                return Object.assign({},
                    state, {
                    customer_id: action.payload.customer_id,
                }
                );
            }
        case actionTypes.SET_RESTAURANT_ID:
            {
                // console.log("set rest id" + action.payload)

                return Object.assign({},
                    state, {
                    restaurant_id: action.payload.restaurant_id,
                }
                );
            }
        case actionTypes.SET_SEARCH_STRING:
            {
                return Object.assign({},
                    state, {
                    searchString: action.payload.searchString,
                }
                );
            }
        case actionTypes.SET_ORDER_ID:
            {
                // console.log("order reducing")
                return Object.assign({},
                    state, {
                    order_id: action.payload.order_id,
                }
                );
            }
        case actionTypes.SET_LOGIN_ID:
            {
                console.log("setting login_id")
                return Object.assign({},
                    state, {
                    login_id: action.payload.login_id,
                }
                );
            }
            case actionTypes.SET_CUST_ID:
                {
                    console.log("setting cust_id")
                    return Object.assign({},
                        state, {
                        cust_id: action.payload.cust_id,
                    }
                    );
                }
            case actionTypes.SET_REST_ID:
                    {
                        console.log("setting rest_id")
                        return Object.assign({},
                            state, {
                            rest_id: action.payload.rest_id,
                        }
                        );
                    }
            case actionTypes.SET_EMAIL_ID:
                        {
                            console.log("setting email_id")
                            return Object.assign({},
                                state, {
                                email_id: action.payload.email_id,
                            }
                            );
                        }
            case actionTypes.SET_CONVERSATION_ID:
                            {
                                console.log("setting conversation_id")
                                return Object.assign({},
                                    state, {
                                    conversation_id: action.payload.conversation_id,
                                }
                                );
                            }
                            case actionTypes.SET_EVENTS_LIST:
                                {
                                    return {
                                        ...state,
                                        eventsList: [...action.payload.eventsList],
                                    }
                    
                                }
                            case actionTypes.SET_ORDERS_LIST:
                                {
                                    return {
                                        ...state,
                                        ordersList: [...action.payload.ordersList],
                                    }
                    
                                }
                            case actionTypes.SET_PAGINATED_EVENTS_LIST:
                                {
                                    // console.log(action.payload)
                                    return {
                                        ...state,
                                        paginatedEvents: [...action.payload.paginatedEvents],
                                    }
                    
                                }
                            case actionTypes.SET_PAGINATED_ORDERS_LIST:
                                {
                                    return {
                                        ...state,
                                        paginatedOrders: [...action.payload.paginatedOrders],
                                    }
                    
                                }
        default:
            return state;
    }
}

export default Common;