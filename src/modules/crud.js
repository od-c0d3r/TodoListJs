function getTasksFromLocalStorage() {
    const list = JSON.parse(localStorage.getItem('list'));
    return list == null ? [] : list;
}

function add(text) {
    let list = getTasksFromLocalStorage();
    let task = {
        desc: text,
        comp: false,
        index: list.length+1
    }
    list.push(task)
    localStorage.setItem('list', JSON.stringify(list));
    return list;
}

// addBook(title, author) {
//     const book = new Book(title, author);
//     book.id = this.books.length;
//     this.books.push(book);
//     this.setBooksToLocalStorage();
//     this.displayBooks();
//     return this.books;
//   }

function edit(params) {
    
}

function remove(params) {
    
}

function clearAll(params) {
    
}

export default function userWatcher(display) {
    document.addEventListener('submit', (e) => {
        let desc = document.getElementById('taskTextInput').value;
        add(desc);
        e.target.reset()
        display()
        e.preventDefault();
    });
  }
  