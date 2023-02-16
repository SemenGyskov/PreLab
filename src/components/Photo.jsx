import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyButton from './UI/button/MyButton'

export default function Photo({id, albumId}){
    const param = useParams()
    const[photos,setPhotos]=useState([])
    console.log(id)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=5`)
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.error(error));
    }, [])
    const [form,setForm] = useState(0)
    function button(){
        if(form === 1){
            setForm('не в избраном')
        }else{
            {setForm('В избраном')}
        }
    }
    return(
        <div>
        {photos.map(photo=>(
            <div>
            <h1>Название фото: {photo.title}</h1>
            <p>фото из альбома № {photo.albumId}</p>
            <p>Картинка № {photo.id}</p>
            <p>{form ? 'Убрать из избранного' : 'Не избрано' }</p>
            <img src={photo.url} alt=""/><br/>
            <MyButton onClick={button}>Добавить в избраное</MyButton>
            </div>
        ))}
    </div>
    )
}