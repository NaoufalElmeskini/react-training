import {configureStore, createAction, createReducer,} from '@reduxjs/toolkit';

export const addRules = createAction('ADD_RULES');
export const likeRule = createAction('LIKE_RULE');
export const dislikeRule = createAction('DISLIKE_RULE');

/* eslint-disable no-param-reassign */
const rulesReducer = createReducer({ rules: [] }, (builder) => {
    builder.addCase(addRules, (state, action) => {
        // state.rules = state.rules.concat(action.payload);
        state.rules = [...state.rules, ...action.payload]
    });

    builder.addCase(likeRule, (state, action) => {
        const rule = state.rules.find((it) => it.id === action.payload);
        if (rule) {
            rule.likes += 1;
        }
    });

    builder.addCase(dislikeRule, (state, action) => {
        const rule = state.rules.find((it) => it.id === action.payload);
        if (rule) {
            rule.dislikes += 1;
        }
    });
});

export const store = configureStore({
    reducer: {
        rules: rulesReducer,
    },
});

export const getRules = (state) => (state.rules.rules.length > 0 ? state.rules.rules : null);