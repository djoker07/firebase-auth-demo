import React from 'react'
import app from "../base"
import Product from "../components/Product"

export default function Home() {
    const product = {
        price: 777.77,
        name: 'comfy chair',
        description: 'fancy chair, like new',
        image: "https://www.digsdigs.com/photos/awesome-creative-chair-designs-9-554x470.jpg",
    };
    return (
        <div>
            <Product product={product}/>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    )
}
