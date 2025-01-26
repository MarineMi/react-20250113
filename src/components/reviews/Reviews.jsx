function Review({ reviews }) {
  if (!reviews.length) {
    return <div>Нет отзывов</div>;
  }

  return (
    <div>
      <h3 className="reviews-list">Отзывы</h3>
      <ul>
        {reviews.map((reviewItem) => (
          <li key={reviewItem.id}>{reviewItem.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Review;
