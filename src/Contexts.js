import React from 'react'

export const ThemeContext = React.createContext({
    primaryColor: 'black',
    secondaryColor: 'green'
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})