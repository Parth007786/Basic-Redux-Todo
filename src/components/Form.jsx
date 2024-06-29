import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update, cancelEdit } from "../features/todos/todoSlice";

const Form = () => {
    const { edit } = useSelector((state) => state.todos);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit.isEdit) {
            dispatch(
                update({
                    _id: edit.todo._id,
                    title,
                    description,
                })
            );
        } else {
            dispatch(
                add({
                    _id: crypto.randomUUID(),
                    title,
                    description,
                })
            );
        }
        setTitle("");
        setDescription("");
    };

    useEffect(() => {
        if (edit.isEdit) {
            setTitle(edit.todo.title || '');
            setDescription(edit.todo.description || '');
        } else {
            setTitle("");
            setDescription("");
        }
    }, [edit]);

    const handleCancel = () => {
        dispatch(cancelEdit());
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Text"
                className="form-control rounded-0"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                type="text"
                className="form-control rounded-0 my-2"
                placeholder="Enter Description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className="btn btn-success w-100 my-3 rounded-0">
                {edit.isEdit ? "Update" : "Save"}
            </button>
            {edit.isEdit && (
                <button
                    type="button"
                    className="btn btn-secondary w-100 my-3 rounded-0"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default Form;
