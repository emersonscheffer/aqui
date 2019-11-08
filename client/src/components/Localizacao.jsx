import React, { Component } from 'react'

export class Localizacao extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#BAA300",
                gridColumn: "1/3",
                borderRadius: "5px 0px 0px 0px",
                display: "grid"

            }}>
                <h1 style={{
                    color: "white",
                    alignSelf: "center",
                    justifySelf: "center",
                    fontWeight: "bolder",
                    fontFamily: "helvetica",
                }}>N</h1>
            </div>
        )
    }
}

export default Localizacao
