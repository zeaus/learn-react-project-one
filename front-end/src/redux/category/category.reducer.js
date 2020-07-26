import { CategoryActionTypes } from "./category.type";

const INITIAL_STATE = {
    // men: {
    //     title: 'men',
    //     imgUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    //     id: 1,
    //     size: 'lg',
    //     items: [
    //         {
    //             title: 'Polo Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 2,
    //             price: 200
    //         },
    //         {
    //             title: 'Dress Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 3,
    //             price: 400
    //         },
    //         {
    //             title: 'Dressh Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 4,
    //             price: 600
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1589992896387-140e940257d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 5,
    //             price: 100
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1564315254352-f33b576102a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 6,
    //             price: 200
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1498849429042-32945497d1de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 7,
    //             price: 500
    //         }
    //     ]
    // },
    // women: {
    //     title: 'women',
    //     imgUrl: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=351&q=80',
    //     id: 8,
    //     size: 'lg',
    //     items: [
    //         {
    //             title: 'Polo Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 9,
    //             price: 200
    //         },
    //         {
    //             title: 'Dress Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1570295108659-056efdf1cb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 10,
    //             price: 200
    //         },
    //         {
    //             title: 'Dressh Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1551741097-ddc11a21148d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 11,
    //             price: 500
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1582551272941-9fc3e8db8bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 12,
    //             price: 100
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1578707800776-5cd6b01c9dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 13,
    //             price: 1000
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1527788732326-6134d4738eaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 14,
    //             price: 1200
    //         }
    //     ]
    // },
    // sneaker: {
    //     title: 'sneaker',
    //     imgUrl: 'https://images.unsplash.com/photo-1570037276380-c3c19487a76d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    //     id: 15,
    //     items: [
    //         {
    //             title: 'Polo Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 16,
    //             price: 1200
    //         },
    //         {
    //             title: 'Dress Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1562424995-2efe650421dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 17,
    //             price: 2200
    //         },
    //         {
    //             title: 'Dressh Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 18,
    //             price: 2400
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 19,
    //             price: 200
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 20,
    //             price: 1200
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1554735490-5974588cbc4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 21,
    //             price: 4200
    //         }
    //     ]
    // },
    // hat: {
    //     title: 'hat',
    //     imgUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    //     id: 22,
    //     items: [
    //         {
    //             title: 'Polo Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 23,
    //             price: 5200
    //         },
    //         {
    //             title: 'Dress Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1518761861208-a2aeb062daa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 24,
    //             price: 3200
    //         },
    //         {
    //             title: 'Dressh Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1579356201272-0a8c71193fc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 25,
    //             price: 2006
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1574120099414-77ba4325afda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 26,
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1589903521522-6dfb45855f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 27,
    //             price: 2040
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1582661702593-149b3f4f2927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 28,
    //             price: 5200
    //         }
    //     ]
    // },
    // jacket: {
    //     title: 'jacket',
    //     imgUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    //     id: 29,
    //     items: [
    //         {
    //             title: 'Polo Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 30,
    //             price: 2400
    //         },
    //         {
    //             title: 'Dress Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 31,
    //             price: 2020
    //         },
    //         {
    //             title: 'Dressh Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 32,
    //             price: 1200
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1568745663067-9248ee880a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 33,
    //             price: 2700
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1578948856697-db91d246b7b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 34,
    //             price: 2000
    //         },
    //         {
    //             title: 'Casual Shirt',
    //             imgUrl: 'https://images.unsplash.com/photo-1547140737-e85d9cd22ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //             id: 35,
    //             price: 20
    //         }
    //     ]
    // }
    categories: null,
    isCategoriesFetching: true,
    error: null
}

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (CategoryActionTypes.FETCH_CATEGORY_START): {
            return {
                ...state,
                isCategoriesFetching: true
            }
        }
        case (CategoryActionTypes.FETCH_CATEGORY_SUCCESS): {
            return {
                ...state,
                isCategoriesFetching: false,
                categories: action.payload,
            }
        }

        case (CategoryActionTypes.FETCH_CATEGORY_FAILURE): {
            return {
                ...state,
                isCategoriesFetching: false,
                error: action.payload
            }
        }

        default:
            return state;
    }
}

export default categoryReducer;