import React from "react";
import "../TodoList.css";

export default function TodoList() {
    return(
        <div className='todo'>
            <h1>Список дел на сегодня: </h1>
            <div class="task">
                <p class='task__text'>Вынести мусор</p> <input type='checkbox'/>
                <p class='date'>10.02.2022</p>
            </div>
            <div class="task">
                <p class='task__text'>Вынести мусор после чего сходить в магазин и купить икру</p> <input type='checkbox'/>
                <p class='date'>10.02.2022</p>
            </div>
        </div>
    )
}