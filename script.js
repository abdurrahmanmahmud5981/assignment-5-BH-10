// btnForNoakhali

// const initialAmount = ;

// getting history element
const historyCard = document.getElementById("historyData");

// get date
const date = new Date();


//oparaition for Noakhali
// document.getElementById("btnForNoakhali").addEventListener("click", (e) => {
//   /**       */
//   const donatedAmountForNoakhali = getTextValue("donatedAmountForNoakhali");

//   const inputAmountForNoakhali = getInputValueById("inputForNoakhali");

//   /** Validaition  */
//   if (
//     getTextValue("initialAmount") < inputAmountForNoakhali ||
//     inputAmountForNoakhali <= 0 ||
//     isNaN(inputAmountForNoakhali)
//   ) {
//     document.getElementById("inputForNoakhali").value = "";
//     alert("invalid input");
//     return;
//   } else {
//     const totalInitialAmount =
//       getTextValue("initialAmount") - inputAmountForNoakhali;
//     //  
//     const totalDonatedForNoakhali = donatedAmountForNoakhali + inputAmountForNoakhali;
//     // 
//     document.getElementById("initialAmount").innerText = totalInitialAmount;
//     document.getElementById("donatedAmountForNoakhali").innerText = totalDonatedForNoakhali;

//     //   creating element for history card
//     const cardForHistory = document.createElement("div");
//     cardForHistory.className = "border border-gray-200 p-3 md:p-8 rounded-lg space-y-4";

//     //
//     cardForHistory.innerHTML = `
//        <h2 class="text-2xl font-bold ">${inputAmountForNoakhali} tk donated for Pepole of  Noakhali </h2>
//        <p class="mt-3">${date.toLocaleString()}</p>
//       `;
//     historyCard.appendChild(cardForHistory);

//     // show modal for successfully donation
//     document.getElementById("my_modal_5").showModal();
//     //   clear the input field
//     document.getElementById("inputForNoakhali").value = "";
//   }
// });
