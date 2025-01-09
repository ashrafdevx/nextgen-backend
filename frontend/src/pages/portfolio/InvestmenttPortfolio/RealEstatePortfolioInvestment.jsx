import ContactForm from "../../../utils/ContactForm";
import AllInvestmentPortfolio from "./AllInvestmentPortfolio";

const InvestmentPortfolioMain = () => {
  return (
    <div className="flex flex-col items-center  sm:pt-7">
      <AllInvestmentPortfolio />
      <ContactForm />
    </div>
  );
};

export default InvestmentPortfolioMain;
