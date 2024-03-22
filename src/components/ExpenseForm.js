import React from "react"
import "./ExpenseForm.css"

 const ExpenseForm=()=>{

    const titleHandler=(event)=>{
        console.log(event.target.value)
    }
    const amountHandler=(event)=>{
        console.log(event.target.value)
    }
    const dateHandler=(event)=>{
        console.log(event.target.value)
    }

    return(
        <form>
            <div className="new-expense__constrols">
                <div className="new-expense__control" > Expense Title</div>
                <input type="text" onChange={titleHandler}></input>

                <div className="new-expense__control"> Expense Amount</div>
                <input type="number" min={0.01} max={0.01} onChange={amountHandler}></input>
                <div className="new-expense__control"> Date</div>
                <input type="date" onChange={dateHandler}></input>
            </div>
            <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm

