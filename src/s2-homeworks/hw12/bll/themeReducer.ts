type initStateType = {
    themeId: number
}

const initState: initStateType = {
    themeId: 1,
}

type changeThemeIdActionType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: changeThemeIdActionType): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
