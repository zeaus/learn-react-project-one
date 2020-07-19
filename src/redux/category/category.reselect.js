import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    men: 1,
    women: 8,
    sneaker: 15,
    hat: 22,
    jacket: 29,
}

const categorySelector = state => state.category.categories;

export const selectCategories = createSelector(
    [categorySelector],
    categories => (
        categories ?
            Object.keys(categories).map(key => categories[key])
            : []
    )
);

export const selectCategory = categoryUrlParam => createSelector(
    [categorySelector],
    categories => categories ? categories[categoryUrlParam] : null
)
