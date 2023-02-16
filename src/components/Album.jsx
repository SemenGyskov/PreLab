import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Photo from "./Photo";
import Loader from "./UI/loader/Loader";

export default function Album(){
    const[albums,setAlbums]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(data => setAlbums(data))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {albums.map(album=>(
            <div>
            <h1>Название Альбома: {album.title}</h1>
            <p>Альбом № {album.id}</p>
            <BrowserRouter>
            <Link to={`/photos/${album.id}`}>Подробнее</Link>
            <Routes>
                <Route path={`/photos/${album.id}`} element={ <Photo id={album.id} /> }></Route>
            </Routes>
            </BrowserRouter>
            </div>
        ))}<Loader/>
    </div>
    )
}