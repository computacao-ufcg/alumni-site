import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <button className='yellow-button'>
      <Link to='/tutorial' className='yellow-button'>Participe</Link>
    </button>
  );
}
