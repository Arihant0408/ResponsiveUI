import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function card() {
    return (<>
     <div class="card mb-3">
  <img class="card-img-top" src="https://www.eecs.mit.edu/wp-content/uploads/2021/06/compscihero-1536x818.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
    </div>
    </>);}