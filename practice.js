let todos = ['Groceries','make dinner','wash car'];

todos.forEach(todo => {
    let div = document.createElement('div')
    div.innerText=todo;
    document.body.appendChild(div);
})

