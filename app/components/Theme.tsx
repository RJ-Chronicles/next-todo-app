'use client'

import { useThemeContext } from '@/context/useThemeContext';
import React, { useMemo } from 'react'

const Theme: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const {isDarkMode, setToggleDarkMode} = useThemeContext();
    const themeConfig = useMemo(()=> {
        return {
          background: isDarkMode ? 'bg-black' : 'bg-white',
          text: isDarkMode ? 'text-white': 'text-slate-500',
        }
      },[isDarkMode])
  return (
    <main className={`${themeConfig.background} ${themeConfig.text} min-h-screen`}>
        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="checkbox" className="toggle" defaultChecked onChange={() => setToggleDarkMode(!isDarkMode)}/>
        </label>
        </div>
      {children}
    </main>
  )
}

export default Theme
