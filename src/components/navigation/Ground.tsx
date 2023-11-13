import Nav_Webview from "./Nav_Webview";

function Ground() {
  return (
    <>
      <div className="h-screen">
        <div className="h-1/5">
          <Nav_Webview />
        </div>

        <div className="flex-generic h-4/5">
          <div className="">
            <p>
              All the world's a stage, and all the men and women merely players.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ground;
