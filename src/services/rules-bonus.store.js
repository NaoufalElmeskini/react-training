import {configureStore, createAction, createEntityAdapter, createReducer,} from '@reduxjs/toolkit';

export const addRules = createAction('ADD_RULES');
export const likeRule = createAction('LIKE_RULE');
export const dislikeRule = createAction('DISLIKE_RULE');

const rulesEntity = createEntityAdapter();

const rulesReducer = createReducer(rulesEntity.getInitialState(), (builder) => {
    builder.addCase(addRules, rulesEntity.addMany);

    builder.addCase(likeRule, (state, action) => {
        const rule = rulesEntity.getSelectors().selectById(state, action.payload);
        if (rule) {
            return rulesEntity.updateOne(state, { id: rule.id, changes: { likes: rule.likes + 1 } });
        }
        return null;
    });

    builder.addCase(dislikeRule, (state, action) => {
        const rule = rulesEntity.getSelectors().selectById(state, action.payload);
        if (rule) {
            return rulesEntity.updateOne(state, {
                id: rule.id,
                changes: { dislikes: rule.dislikes + 1 },
            });
        }
        return null;
    });
});

export const store = configureStore({
    reducer: {
        rules: rulesReducer,
    },
});

const rulesSelectors = rulesEntity.getSelectors((state) => state.rules);
export const getRules = rulesSelectors.selectAll;