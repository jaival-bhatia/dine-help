import React from 'react'
import {useJsApiLoader , GoogleMap} from '@react-google-maps/api'

export default function MapFunction(){
  const {isLoader} = useJsApiLoader({
    googleMapsApiKey : "AIzaSyA50fQrz48X_IKj3a20ACG-nZ9z5laNxHE"
  })

  if(!isLoader) return <div>Loading..</div>
  return <Map/>
} 

function Map(){
  return <GoogleMap zoom={15} center={{lat:40, lon:20}} mapContainerStyle={{height:"100%" , width: "100%"}}></GoogleMap>
}