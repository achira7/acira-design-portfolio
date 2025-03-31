import React from 'react'

import Carousel from '../components/Carousel'

const title = "Be Yourseldf Design";

const img = [
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1487252015168-776961549aca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOQCpOkPwRh6t2JW2LQpFKilE9dsUe1SduQ&shttps://images.unsplash.com/photo-1502856755506-d8626589ef19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://haman.no/wp-content/uploads/2024/05/lukas-tennie-54Pfu4EK4pc-unsplash-1920x1080.jpg",
    "https://plus.unsplash.com/premium_photo-1723983555804-4f76968a2a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1478001517127-fccc92f54906?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",

];

const Test = () => {
  return (
    <div className='flex flex-col text-primary font-primary m-5 items-center justify-center'>
        <h1 className='flex my-5'>{title}</h1>
        <Carousel images={img}/>
    </div>
  )
}

export default Test