import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//     men: 1,
//     women: 8,
//     sneaker: 15,
//     hat: 22,
//     jacket: 29,
// }
const singleCategorySelectore = state => state.category;
const categorySelector = createSelector(
    [singleCategorySelectore],
    category => category.categories
);

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


export const selectIsCategoriesFetching = createSelector(
    [singleCategorySelectore],
    category => category.isCategoriesFetching
)