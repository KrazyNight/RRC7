function Todo({ task, description }) {

    function deleteHandler() {
        console.log('Delete', task);
    }
    return (
        <div className="todo-item">
            <h2>{ task }</h2>
            <p>{ description }</p>
            <button onClick={() => deleteHandler()}>Delete</button>
        </div>
    )
};

export default Todo;













/**
function name() {
    return (
        <div></div>
    )
};

export default name;

*/

/**
function name() {
    return (
        <div></div>
    )
};

export dafault name;
 */


