function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <main className="mx-auto flex items-center justify-center h-screen">
        <section className="bg-backgroundTwo p-10">
            <h1 className="text-center">Country Quiz</h1>
            {numbers.map((number) => (
              <button className="text-milkWhite px-4 py-2 m-2 rounded-full bg-backgroundOne">{number}</button>
            ))}
            <p>Question</p>
            <div className="grid grid-cols-2 justify-center items-center mx-auto">
              <p>Sweden</p>
              <p>Vietnam</p>
              <p>Malaysia</p>
              <p>Austria</p>
            </div>
        </section>
      </main>
    </>
  );
}

export default App;
