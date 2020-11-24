import React from 'react'
import app from "../base"

export default function Home() {
    return (
        <div>
            <h1>Hello world</h1>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    )
}
