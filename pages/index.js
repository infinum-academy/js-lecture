function Index() {
  function onButtonClick() {
    console.log('button clicked');
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={onButtonClick}>
        Click me
      </button>
    </div>
  );
}

export default Index;
