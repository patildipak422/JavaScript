const myTodos = [{
    title : 'Have Learnt Javascript',
    isDone : true
},{
    title : 'Drived the Car',
    isDone : true
},{
    title : 'Called Tejas',
    isDone : false
},{
    title : 'Signed an Agreement',
    isDone : false
},{
    title : 'Have taken Medicines',
    isDone : false
},{
    title : 'Met your sister',
    isDone : true
}]


const thingsNotDone = myTodos.filter((todo) => {
    if(todo.isDone === false) 
        return todo.title
})

console.log(thingsNotDone)