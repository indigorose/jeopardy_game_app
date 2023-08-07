/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Clue from './Clue'

function Category({category}) {
    const values = [200, 400, 600, 800, 1000]

    return (
        <div className="jeopardy-category">
            <h2>{category.title}</h2>
            {values.map((value, index) => {
                const clue = category.clues.find((clue) => 
                    clue.value === value
                )
                return <Clue key={index} value={value} clue={clue}/>
            })}
        </div>
    )
}

export default Category