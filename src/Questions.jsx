import Question from './Question';

function Questions({ questions }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((q) => (
        <Question key={q.id} {...q} />
      ))}
    </section>
  );
}
export default Questions;
