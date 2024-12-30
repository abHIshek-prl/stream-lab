import React from 'react'
import Header from '../components/Header'
import Footr from '../components/Footr'
import BannerM from '../components/BannerM'
import Mposter from '../components/Mposter'
import Mposter2 from '../components/Mposter2'
import { action,Comedy,Documentery,Horror, Romance } from '../components/Urls/Url'
import { API_KEY } from "../Constands/constand";

function Movies() {
  return (
    <div>
        <Header/>

        <BannerM/>

        <Mposter/>
        
        <Mposter2 title='action' url={action}/>
        <Mposter2 title='Horror' url={Horror}/>
        <Mposter2 title='Comedy' url={Comedy}/>
        <Mposter2 title='Romance' url={Romance}/>
        <Mposter2 title='Documentry' url={Documentery}/>

        <Footr/>
    </div>
  )
}

export default Movies
