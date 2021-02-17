import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <button className='yellow-button'>
      <Link to={ props.link } className='yellow-button'>
        { props.name }
      </Link>
    </button>
  );
}
