import React from "react";

import "./styles.css";

function NewMembers() {
  return (
    <>
      <h1 className="title-panel-new-members">Últimos egressos cadastrados</h1>

      <div className="new-members-list">
        <ul>
          <li>
            <p>Fulano</p>
            <a href="#">Linkedln</a>
          </li>
          <li>
            <p>Ciclano</p>
            <a href="#">Linkedln</a>
          </li>
          <li>
            <p>Beltrano</p>
            <a href="#">Linkedln</a>
          </li>
          <li>
            <p>Outro</p>
            <a href="#">Linkedln</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NewMembers;