import Nav_Webview from "./Nav_Webview";

function Ground() {
  return (
    <>
      <div className="h-screen">
        <div className="h-auto">
          <Nav_Webview />
        </div>

        <div className="flex-generic h-4/5">
          <div>
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
