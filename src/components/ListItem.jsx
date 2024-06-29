import { useDispatch } from "react-redux";
import { edit, remove } from "../features/todos/todoSlice";

const ListItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(remove(id));
    };

    const handleEdit = (todo) => {
        dispatch(edit(todo));
    };

    return (
        <li className="list-group-item rounded-0">
            {todo.title}<br />
            {todo.description}
            <span className="float-end">
                <button
                    onClick={() => handleEdit(todo)}
                    className="mx-1 btn btn-warning btn-sm rounded-0"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(todo._id)}
                    className="mx-1 btn btn-danger btn-sm rounded-0"
                >
                    Delete
                </button>
            </span>
        </li>
    );
};

export default ListItem;
