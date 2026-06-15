const form = document.querySelector("form") as HTMLFormElement;

const clearBtn = document.querySelector(".clear") as HTMLButtonElement;
const calculateBtn = document.querySelector(".calc") as HTMLButtonElement;

const mortgageInput = document.getElementById(
  "mortgage_amount",
) as HTMLInputElement;
const termInput = document.getElementById("term") as HTMLInputElement;
const rateInput = document.getElementById("rate") as HTMLInputElement;

const monthlySum = document.getElementById("monthly_sum") as HTMLSpanElement;
const totalSum = document.getElementById("total_sum") as HTMLSpanElement;

const primaryChild = document.querySelector(".child") as HTMLDivElement;
const resultHtml = document.querySelector(".results") as HTMLDivElement;

interface MortgageInputs {
  mortgageAmount: number;
  morgageTerm: number;
  mortgageRate: number;
  mortgageType: "repayment" | "interest";
}

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const mortgage: number = parseFloat(mortgageInput.value);
  const term: number = parseInt(termInput.value);
  const rate: number = parseFloat(rateInput.value)
  console.log(rate)
});
