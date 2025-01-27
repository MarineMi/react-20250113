import Counter from "../counter/Counter";
import { useForm } from "./useForm";

function ReviewForm() {
  const {
    form: { user, text, rating },
    setUser,
    setText,
    setRatingDecrement,
    setRatingIncrement,
    setClear,
  } = useForm();

  return (
    <div>
      <h3>Add review</h3>
      <div>
        <span>User name</span>
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <span>Rating</span>
        <Counter
          count={rating}
          onDecrement={setRatingDecrement}
          onIncrement={setRatingIncrement}
        />
      </div>

      <button onClick={() => setClear()}>Clear</button>
      {/* <button>Add review</button> */}
    </div>
  );
}

export default ReviewForm;
