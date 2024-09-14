import React from 'react'

export default function ProyectData(props) {
    const datasProyect = {
        tittle: props.title,

    }
    return (<>
        <div>
            <div>
                <h3>
                    {datasProyect.tittle}
                </h3>
                <p>

                </p>
            </div>
        </div>
    </>)

}