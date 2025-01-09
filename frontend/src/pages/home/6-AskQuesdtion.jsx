const AskQuesdtion = () => {
  return (
    <>
      <div className="container flex items-center flex-col mx-auto pt-3 mb-5 ">
        <h2 className="text-5xl py-10 font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="container mx-auto items-center px-16 mb-4 gap-4 pt-2">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is a custom home?
            </div>
            <div className="collapse-content">
              <p>
                A custom home is a house designed and built from scratch based
                on your unique preferences, needs, and lifestyle. Unlike a
                pre-built home, every detail can be customized to your liking.
              </p>
            </div>
          </div>

          <div className="mt-3 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How much does it cost to build a custom home?
            </div>
            <div className="collapse-content">
              <p>
                A custom home is a house designed and built from scratch based
                on your unique preferences, needs, and lifestyle. Unlike a
                pre-built home, every detail can be customized to your liking.
              </p>
            </div>
          </div>

          <div className="mt-3 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How long does it take to build a custom home?
            </div>
            <div className="collapse-content">
              <p>
                A custom home is a house designed and built from scratch based
                on your unique preferences, needs, and lifestyle. Unlike a
                pre-built home, every detail can be customized to your liking.
              </p>
            </div>
          </div>

          <div className="mt-3 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do I need to own land before building a custom home?
            </div>
            <div className="collapse-content">
              <p>
                A custom home is a house designed and built from scratch based
                on your unique preferences, needs, and lifestyle. Unlike a
                pre-built home, every detail can be customized to your liking.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-3 flex items-center justify-center">
          {" "}
          <button
            onClick={() => alert("View All For Our Project has Cliked!!!")}
            className=" border text-center transition bg-blue-600  text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
          >
            View all
          </button>
        </div>
      </div>
    </>
  );
};

export default AskQuesdtion;
