const initialState = {
    counter: 0,
    list: [
        {
            id: 0,
            title: 'Beginner Book',
            author: 'John',
            price: '40$',
            isClicked: false,
            deleteRow: false
        },
        {
            id: 1,
            title: 'Advanced Book',
            author: 'Doe',
            price: '50$',
            isClicked: false,
            deleteRow: false
        }
    ],
    isClicked: false,
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'BUTTON') {
        let newList2 = [...state.list]
        newList2[action.index].isClicked = !state.list[action.index].isClicked;
        return {
            ...state,
            list: newList2
        }
    }
    if (action.type === 'EDIT') {
        if (action.field === 'title') {
            let newList = [...state.list]
            newList[action.index].title = action.payload;
            return {
                ...state,
                list: newList
            }
        }
        if (action.field === 'author') {
            let newList = [...state.list]
            newList[action.index].author = action.payload;
            return {
                ...state,
                list: newList
            }
        }
        if (action.field === 'price') {
            let newList = [...state.list]
            newList[action.index].price = action.payload;
            return {
                ...state,
                list: newList
            }
        }
    }
    if (action.type === "DELETE") {
        alert('Confirm?');
        const newList3 = [...state.list];
        newList3.slice(0, action.index).concat(state.list.slice(action.index + 1));
        return {
            ...state,
            list: newList3
        }
    } else {
        return state
    }
}

export default reducer;