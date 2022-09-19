export default function Task({ task, taskChange, checked }) {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => taskChange(event, task.id)}
      />{" "}
      <label style={checked && { textDecoration: "line-through" }}>
        {task.task}
      </label>
    </>
  );
}
