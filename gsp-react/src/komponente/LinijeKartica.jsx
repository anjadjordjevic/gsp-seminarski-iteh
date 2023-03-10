import React from 'react'
import {FaBus} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';



function LinijeKartica({linija,dodajOmiljenu,mod,izbaciIzOmiljenih,dodeliID}) { //mod-1 ako je kartica prikaz linije, 0- ako je kartica omiljena
  let navigate = useNavigate();
  function prikaziDetalje(){

    navigate("/linije/"+linija.id)

     dodeliID(linija.id);

  }
  return (
    <div >
      <div className="card">

        <h1><FaBus></FaBus>   {linija.brojLinije}</h1>
        <p className="price">OD: {linija.pocetnaDestinacija.naziv}</p>
        <p className="price">DO: {linija.zavrsnaDestinacija.naziv}</p>

        <p>Predvidjeno vreme {linija.vreme}</p>
        <p> ZONA:{linija.zona}</p>
        {mod==1 ? 
        <p><button onClick={()=>dodajOmiljenu(linija.id)}>Dodaj u omiljene linije</button></p>
        :
        <p><button onClick={()=>izbaciIzOmiljenih(linija.id)}>Izbaci iz omiljenih</button></p>
        }

        <br />
        <p><button onClick={()=>prikaziDetalje(linija.id)}>Prikazi detalje</button></p>
      </div>




    </div>
  );
}

export default LinijeKartica;