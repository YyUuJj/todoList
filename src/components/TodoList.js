import React, { useState } from "react";
import "../TodoList.css";
import PostItem from "./TodoItem";
import MyInput from "./MyInput";
// export default function TodoList() {
//     return(
//         <div className='todo'>
//             <h1>Список дел на сегодня: </h1>
//             <div class="task">
//                 <p class='task__text'>Вынести мусор</p> <input type='checkbox'/>
//                 <p class='date'>10.02.2022</p>
//             </div>
//             <div class="task">
//                 <p class='task__text'>Вынести мусор после чего сходить в магазин и купить икру</p> <input type='checkbox'/>
//                 <p class='date'>10.02.2022</p>
//             </div>
//         </div>
//     )
// }

class ClassTodoList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                posts: [
                    {id: 1, title: "test", date: '26.06.1999', complete: true},
                    {id: 2, title: "islam", date: '26.07.1999', complete: false}
                ],
                input_title: "",
                input_text: ""
            }
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
            this.input_title = this.input_title.bind(this);
            this.input_text = this.input_text.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.completeTask = this.completeTask.bind(this);

        }
        handleSubmit = (event) => {
            event.preventDefault();
            // const tek_date = new Date()
            const newPost = {
                id: this.state.posts.length+1,
                title: this.state.input_title,
                // date: tek_date,
                complete: false
            }
            this.setState({
                posts: [...this.state.posts, newPost]
            })
            this.setState({
                input_text: '',
                input_title: ''
            })
          }

        increment() {
            this.setState({
                count: this.state.count + 1
            })
        }

        decrement() {
            this.setState({
                count: this.state.count - 1
            })
        }

        input_title(event) {
            console.log(event.target.value)
            this.setState({
                input_title: event.target.value
            })
        }

        input_text(event) {
            this.setState({
                input_text: event.target.value
            })
        }

        completeTask(event) {
            const key = Number(event.target.id)
            console.log(key)
            // console.log(typeof key)
            console.log(this.state.posts[key-1])
            console.log(this.state.posts)
            this.setState(prevState => ({
              posts: prevState.posts.map(eachItem =>
                eachItem.id === 1
                ? { ...eachItem, complete: true }
                : eachItem
                )  
            }))
            console.log(this.state.posts[key-1])
        }


        render() { 
            return(
                <div className='todo'>
                    <h1>Список дел на сегодня: </h1>
                    <div className="task">
                        <p className='task__text'>Вынести мусор</p> <input type='checkbox'/>
                        <p className='date'>10.02.2022</p>
                    </div>
                    <div className="task">
                        <p className='task__text'>Вынести мусор после чего сходить в магазин и купить икру</p> <input type='checkbox'/>
                        <p className='date'>10.02.2022</p>
                    </div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>Добавить</button>
                    <button onClick={this.decrement}>Отнять</button>
                    {/* <input type='text' onChange={this.test} /> */}
                    {this.state.posts.map(post =>
                        <PostItem post={post} key={'id:' + post.id} id={post.id} onClick={this.completeTask}/>)
                        }
                    <form onSubmit={this.handleSubmit}>
                        <MyInput value={this.state.input_title} placeholder='Введите заголовок' onChange={this.input_title}/>
                        <MyInput value={this.state.input_text} placeholder='Введите задачу' onChange={this.input_text}/>
                        <input type='submit' value='Отправить'/>
                    </form>
                </div>
            )
        }
}

export default ClassTodoList;