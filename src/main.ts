const form = document.querySelector("form") as HTMLFormElement;

const clearBtn = document.querySelector(".clear") as HTMLButtonElement;
const calculateBtn = document.querySelector(".calc") as HTMLButtonElement;

const mortgageInput = document.getElementById("mortgage_amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById(".rate");

const monthlySum = document.getElementById("monthly_sum") as HTMLSpanElement;
const TotalSum = document.getElementById("total_sum") as HTMLSpanElement;

const primaryChild = document.querySelector(".child") as HTMLDivElement;
const resultHTML = document.querySelector(".results") as HTMLDivElement;

interface MortgageINputs {
  MortgageAmounts: number;
  morgageTerm: number;
  mortgageRate: number;
  mortgageType: "Repayment" | "interest";
}

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const mortgage: number = parseFloat(mortgageInput.value);
  const term: number = parseInt(termInput.value);

  const rate: number = parseFloat(rateInput.value);
  console.log(rate);
});
