import React from 'react'
function About(){
    /*return(
        <div>
            <h1>About page</h1>
        </div>
    )
}*/
return React.createElement("div",
{id:"demo",className:"democlass"},
React.createElement("h1",null,"About page")
)
}
export default About