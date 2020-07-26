import { CategoryActionTypes } from "./category.type";
import { firestore, getCategories } from "../../firebase/firebase.util";

export const fetchCategoriesStart = () => ({
    type: CategoryActionTypes.FETCH_CATEGORY_START,
})

export const fetchCategoriesSuccess = (categories) => ({
    type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
    payload: categories
})

export const fetchCategoriesFailure = (error) => ({
    type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
    payload: error
})

export const fetchCategoriesStartAsync = () => {
    return dispatch => {
        dispatch(fetchCategoriesStart())
        const categoryRef = firestore.collection('categories');
        categoryRef.get()
            .then(snapshot => {
                const categoriesObject = getCategories(snapshot);
                dispatch(fetchCategoriesSuccess(categoriesObject));
            })
            .catch((error) => {
                dispatch(fetchCategoriesFailure(error))
            })
    }
}