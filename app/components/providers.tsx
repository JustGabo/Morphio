"use client"
import React from 'react'
import { ToConvertContextProvider } from '../context/to-convert-context'

interface Props {
    children: React.ReactNode
}

const Providers = ({children}: Props) => {
  return (
    <ToConvertContextProvider>{children}</ToConvertContextProvider>
  )
}

export default Providers