import React from "react";

import "./styles.css";

import MemberItem from "./MemberItem";

function NewMembers() {
  return (
    <>
      <h1 className="title-panel-new-members">Últimos egressos cadastrados</h1>

      <div className="new-members-list">
        <ul>
          <MemberItem 
            name="Ciclano" 
            linkedln_url="" />
          
          <MemberItem 
            name="Beltrano" 
            linkedln_url="" />

          <MemberItem 
            name="Fulano" 
            linkedln_url="" />

          <MemberItem 
            name="Outro" 
            linkedln_url="" />
        </ul>
      </div>
    </>
  )
}

export default NewMembers;