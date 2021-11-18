import React from 'react'
import { Route } from 'react-router-dom'
import { ApplicationViews } from "./ApplicationViews.js"
import { NavBar } from "./nav/NavBar.js"
import './KandyKorner.css'

export const KandyKorner = () => {

    return (

        <>        
            <NavBar />
            <ApplicationViews />
        </>

    )
}