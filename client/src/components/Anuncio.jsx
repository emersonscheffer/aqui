import React, { Component } from 'react'
import AnuncioCategoria from './AnuncioCategoria'
import AnuncioData from './AnuncioData'
import AnuncioMenssagem from './AnuncioMenssagem'
import AnuncioContato from './AnuncioContato'
import AnuncioNome from './AnuncioNome'
import AnuncioPreco from './AnuncioPreco'

export class Anuncio extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#565656",
                width: "210px",
                height: "210px",
                border: "2px solid #C5C2C2",
                borderRadius: "7px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridAutoRows: "minmax(30px, 30px)",
                gridGap: "6px",
                padding: "5px",
                float: "left",
                marginRight: "10px",
                marginBottom: "10px"
            }}>
                <AnuncioCategoria />
                <AnuncioData />
                <AnuncioMenssagem />
                <AnuncioNome />
                <AnuncioPreco />
                <AnuncioContato />
                
            </div>
        )
    }
}

export default Anuncio
