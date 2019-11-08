import React, { Component } from "react";

export class AdicionarAnuncio extends Component {
  
   

  render() {


    return (

      <div>
        <form >
          <label>Nome</label>
          <input name="nome" />
          <label>Telefone</label>
          <input name="telefone" />
          <label>email</label>
          <input name="email" />

          <select>
            <option value="categoria">categoria</option>
            <option value="carro">carro</option>
          </select>

          <select>
            <option value="Localidade">Localidade</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
          </select>
          <label>Anuncio</label>
          <textarea />

          <label>Valor</label>
          <input name="valor" />

          <input type="submit" value="Salvar" />
        </form>
      </div>
    );
  }
}

export default AdicionarAnuncio;
