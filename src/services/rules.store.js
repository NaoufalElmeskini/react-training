import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

export const addRules = createAction('ADD_RULES');
const ruleInitialeState = {rules: []};

const rulesReducer = createReducer(ruleInitialeState, (builder) => {
    builder.addCase(addRules, (state, action) => {
        state.rules = action.payload;
    })
})

export const getRules = (state) => state.rules.rules;

export const ruleStore  = configureStore ({
    reducer: {
        rules: rulesReducer,
    },
});

