function Todo({ task, togglePopup }) {

    function deleteHandler() {
        console.log('Delete', task[0]);
    }
    return (
        <div className="todo-item">
            <h2>{ task }</h2>
            <button onClick={() => togglePopup()}>Delete</button>
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


