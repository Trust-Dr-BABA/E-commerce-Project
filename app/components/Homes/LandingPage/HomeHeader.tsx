

export default function HomeHeader() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4">
      <div className="col-span-1 p-4">
      </div>
      <div className="col-span-2 p-4 grid grid-rows-2 grid-cols-2 gap-2">
        <div className="row-start-1 col-span-2"></div>
        <div className="row-start-2 col-start-1"></div>
        <div className="row-start-2 col-start-2"></div>
      </div>
      <div className="col-span-1 p-4 grid grid-rows-2 gap-2">
        <div className="row-start-1"></div>
        <div className="row-start-2"></div>
      </div>
    </div>
  );
}