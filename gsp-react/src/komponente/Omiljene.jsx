import React from 'react'
import LinijeKartica from './LinijeKartica';

function Omiljene({linije,brojOmiljenih,izbaciIzOmiljenih, prikaziDetalje,dodeliID}) {
  return (
    <div className='sveLinije'>

    {brojOmiljenih==0 ? 

    <>
        <h1>Niste dodali ni jednu omiljenu liniju</h1>
    </>

    :

    <>
          {linije
            .filter((l)=>l.omiljena==1)

            .map((l)=>(<LinijeKartica key={l.id} linija={l} mod={0} izbaciIzOmiljenih={izbaciIzOmiljenih} prikaziDetalje={prikaziDetalje} dodeliID={dodeliID}></LinijeKartica>))}
    </>

    }




    </div>
  );
}

export default Omiljene;