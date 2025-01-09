const Heading = () => {
  return (
    <div className="text-center px-6 sm:px-16 md:container md:max-w-5xl md:px-0 py-3">
      <h1 className="flex font-medium font-rubik text-center text-md sm:text-3xl  md:text-6xl justify-center ">
        Group Investment Management:
      </h1>
      <p className="text-sm sm:text-lg sm:py-2 md:py-4 font-quicksand">
        {`At NextGen Properties, we facilitate group investments without intermediaries like banks, maximizing your financial returns. Whether
        you're seeking to diversify your portfolio or pursue long-term or
        quick-turn investments, we provide the expertise and resources for
        success in the real estate market.`}
      </p>
      <p className="text-sm sm:text-lg sm:py-2 md:py-4 font-quicksand">
        By aggregating the resources of multiple investors—typically between 10
        and 20—we establish a partnership LLC (Limited Liability Company) to
        develop properties on your behalf. This investment process includes: For
        more details on How our Group Investment management works, Visit our
        <span className="hover:underline font-semibold ml-1 cursor-pointer text-blue-600">
          How Group Investment Management Works
        </span>
        .
      </p>
    </div>
  );
};

export default Heading;
