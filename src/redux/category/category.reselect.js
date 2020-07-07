import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    men: 1,
    women: 8,
    sneaker: 15,
    hat: 22,
    jacket: 29,
}

const categorySelector = state => state.category;

export const selectCategories = createSelector(
    [categorySelector],
    category => {
        debugger
        console.log(Object.keys(category).map(key => category[key]))
        return (Object.keys(category).map(key => category[key]))}
);

export const selectCategory = categoryUrlParam => createSelector(
    [categorySelector],
    categories => categories[categoryUrlParam]
)
