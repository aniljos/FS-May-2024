interface GadgetStoreState {
    cart : Array<any>;
}

const initialState: GadgetStoreState={
    cart: []
}

export const gadgetReducer = (currentState=initialState, action: any)=> {
    return currentState;
}

