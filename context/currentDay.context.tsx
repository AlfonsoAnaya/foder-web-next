"use client"

import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

interface State {
    currentDay: number;
};

interface Action {
    type: string;
    payload?: any; // Adjust payload type according to your needs
};

interface CurrentDayContextProviderProps {
    children: ReactNode;
};

const initialState = {
    currentDay: 0,
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "UPDATE_DAY":
            return {
                ...state,
                currentDay: action.payload, // Update currentDay with the payload value
            };

        default:
            return state;
    }
};

const initialContextValue: { state: State; dispatch: Dispatch<Action> } = {
    state: initialState,
    dispatch: () => null,
};

export const CurrentDayContext = createContext(initialContextValue);

export const CurrentDayContextProvider = ({ children }: CurrentDayContextProviderProps ) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CurrentDayContext.Provider value={{ state, dispatch }}>
            {children}
        </CurrentDayContext.Provider>
    );
};