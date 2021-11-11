import React from 'react'

export const ThemeContext = React.createContext({
    primaryColor: 'green',
    secondaryColor: 'orange'
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})