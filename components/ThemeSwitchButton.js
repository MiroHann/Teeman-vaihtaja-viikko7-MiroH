import React from 'react'
import { Switch } from 'react-native-paper'
import { useTheme } from '../context/useTheme'

export default function ThemeSwitchButton(){
const { isDarkmode, toggleDarkMode } = useTheme()

return (
    <Switch value={isDarkmode} onValueChange={toggleDarkMode}/>
)
}