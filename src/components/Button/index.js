import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={ props.link } className='yellow-button'>
      <button className='yellow-button'>
        { props.name }
      </button>
    </Link>
  );
}
