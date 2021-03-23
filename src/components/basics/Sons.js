import React from 'react'

function Sons (props){

    return(
        <div>
            <h2>Os Filhos</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Sons;