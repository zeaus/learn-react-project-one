import {CategoryActionTypes} from "./category.type";
export const updateCategories = categoryObject => ({
    type: CategoryActionTypes.UPDATE_CATEGORY,
    payload: categoryObject
})