import React from "react";

function List() {
    const Tarefa = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'Javascript',
        tempo: '01:00:00'

    },
    {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return(
        
        <aside>
            <h2>Estudo do dia</h2>
            <ul>
                {Tarefa.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}       
            </ul>
        </aside>

    )
}

export default List;