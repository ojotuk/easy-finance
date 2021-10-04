import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div style={{height:"100vh"}} className="d-flex align-items-center">
            <Link to="/loans" style={{margin:"auto"}}>Proceed here</Link>
        </div>
    )
}
