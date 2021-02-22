import React from "react";

function MemberItem(props) {
  return (
    <li>
      <p>{ props.name }</p>
      <a href={ props.linkedln_url }>Linkedln</a>
    </li>
  )
}

export default MemberItem;