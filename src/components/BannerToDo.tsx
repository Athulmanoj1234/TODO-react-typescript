import { useState } from "react";
import { MdDelete } from "react-icons/md";
import jsxts from '../assets/react plus ts.png';

const BannerToDo = () => {

const [inputValue, setInputValue] = useState<string>('');  // by definnig this genric type typescript is  saying that each update and initial value of to do array will be always string. 
const [todo, setTodo] = useState<string[]>(['']);  // by definnig this genric type typescript is  saying that toDo will be always an string of array numbers no further types can be added  

const addToDo = (): string[] => {
   
     setTodo((todoItems: string[])=> [...todoItems, inputValue]); //todo array will be destructured and inputvalue entered in the input will be stored in the todo array by setTodo setState
     setInputValue('');
     console.log(todo);
     return todo;

}

const deleteTodo = (deleteItem: string, itemNo: number): string[] => {
    
     setTodo(todo.filter((itemToDelete: string, index: number) =>( itemToDelete !== deleteItem )));
     return todo;

}

return (
    <div className=''>
     <section className='grid place-items-center'>
       <h1 className='mb-2 text-5xl'>Todo App </h1>
       <img src={jsxts} className='h-20' />
      </section>
      <section className='bg-slate-400 w-[100vh]'>
         <div className='flex justify-center mb-1'>
            <input className='my-3 bg-slate-100 text-black' type='text' value={inputValue} onChange={e=> {setInputValue(e.target.value)}}/>
            <button className='my-3 py-3' onClick={()=> addToDo()}>add</button>
         </div>
    {  todo && (
       todo.map((listItems: string, index: number)=> (    
         <div>
            <input className='my-3 bg-slate-100 text-black' type='text' value={ index} />
            <button className='my-3 py-3' onClick={()=> deleteTodo(listItems, index)}><MdDelete /></button>
         </div> ) ) ) }
      </section>
    </div>
  )
}

export default BannerToDo
