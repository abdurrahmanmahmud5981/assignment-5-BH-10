//operaition for Feni 
document.getElementById("btnForFeni").addEventListener("click", (e) => {
    /**       */
    const donatedAmountForFeni = getTextValue("donatedAmountForFeni");
    const inputAmountForFeni = getInputValueById("inputForFeni");

  
    /** Validaition  */
    if (
      getTextValue("initialAmount") < inputAmountForFeni ||
      inputAmountForFeni <= 0 ||
      isNaN(inputAmountForFeni)
    ) {
      document.getElementById("inputForNoakhali").value = "";
      alert("invalid input");
      return;
    } else {
      const totalInitialAmount =
        getTextValue("initialAmount") - inputAmountForFeni;
      //  
      const totalDonatedForFeni = donatedAmountForFeni + inputAmountForFeni;
      // 
      document.getElementById("initialAmount").innerText = totalInitialAmount;
      document.getElementById("donatedAmountForFeni").innerText = totalDonatedForFeni;
  
      //   creating element for history card
      const cardForHistory = document.createElement("div");
      cardForHistory.className = "border border-gray-200 p-3 md:p-8 rounded-lg space-y-4";
  
      //
      cardForHistory.innerHTML = `
         <h2 class="text-2xl font-bold ">${inputAmountForFeni} tk donated for Pepole of  Feni </h2>
         <p class="mt-3 bg-stone-100 p-3 rounded-lg">${date.toLocaleString()}</p>
        `;
      historyCard.appendChild(cardForHistory);
  
      // show modal for successfully donation
      document.getElementById("my_modal_5").showModal();
      //   clear the input field
      document.getElementById("inputForFeni").value = "";
    }
  });