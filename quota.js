//oparaition for Noakhali
document.getElementById("btnForQuota").addEventListener("click", (e) => {
    /**       */
    const donatedAmountForQuota = getTextValue("donatedAmountForQuota");
  
    const inputAmountForQuota = getInputValueById("inputForQuota");
  
    /** Validaition  */
    if (
      getTextValue("initialAmount") < inputAmountForQuota ||
      inputAmountForQuota <= 0 ||
      isNaN(inputAmountForQuota)
    ) {
      document.getElementById("inputForQuota").value = "";
     // show modal for invalid donation
     document.getElementById("my_modal_6").showModal();
      return;
    } else {
      const totalInitialAmount =
        getTextValue("initialAmount") - inputAmountForQuota;
      //  
      const totalDonatedForNoakhali = donatedAmountForQuota + inputAmountForQuota;
      // 
      document.getElementById("initialAmount").innerText = totalInitialAmount;
      document.getElementById("donatedAmountForQuota").innerText = totalDonatedForNoakhali;
  
      //   creating element for history card
      const cardForHistory = document.createElement("div");
      cardForHistory.className = "border border-gray-200 p-3 md:p-8 rounded-lg space-y-4";
  
      //
      cardForHistory.innerHTML = `
         <h2 class="text-2xl font-bold ">${inputAmountForQuota}  ${getInnerText("titleForQuota")} </h2>
         <p class="mt-3 bg-stone-100 p-3 rounded-lg"> Date: ${date.toLocaleDateString()} and Time: ${date.toLocaleTimeString()}</p>
        `;
      historyCard.appendChild(cardForHistory);
  
      // show modal for successfully donation
      document.getElementById("my_modal_5").showModal();
      //   clear the input field
      document.getElementById("inputForQuota").value = "";
    }
  });