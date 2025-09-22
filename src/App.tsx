import "./index.css";

export function App() {

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="mb-6 font-serif text-3xl">Box Breathing</h1>
        <div className="size-40 border border-blue-50/10 relative">
          <div className="c-border-l absolute z-[4] w-3  "></div>
          <div className="c-border-t absolute z-[3] h-3 w-full "></div>
          <div className="c-border-r absolute z-[2] w-3 right-0"></div>
          <div className="c-border-b absolute z-[1] h-3 w-full bottom-0"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
