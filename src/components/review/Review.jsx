function Review({ review }) {
  const { text } = review;

  if (!text) {
    return null;
  }

  return (
    <>
      <li>{text}</li>
    </>
  );
}

export default Review;
