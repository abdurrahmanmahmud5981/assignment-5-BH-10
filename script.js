// btnForNoakhali

// const initialAmount = ;

  /** Validaition  */


// it's a commont function for operaition
  function operation(
    initialAmount,inputForDistrict,donatedAmountForDistrict,titleForDistrict
  ) {

      const converNumber = getInputValueById(inputForDistrict)

    if (
        getTextValue(initialAmount) < converNumber ||
        converNumber <= 0 ||
        isNaN(converNumber)
      ) {
        document.getElementById(inputForDistrict).value = "";
       // show modal for invalid donation
       document.getElementById("my_modal_6").showModal();
        return;
      } else {
        const totalInitialAmount =
          getTextValue(initialAmount) - converNumber;
        //  
        const totalDonatedForFeni = getTextValue(donatedAmountForDistrict) + converNumber;
        // 
        document.getElementById(initialAmount).innerText = totalInitialAmount;
        document.getElementById(donatedAmountForDistrict).innerText = totalDonatedForFeni;
    
        //   creating element for history card
        const cardForHistory = document.createElement("div");
        cardForHistory.className = "border border-gray-200 p-3 md:p-8 rounded-lg space-y-4";
    
        //
        cardForHistory.innerHTML = `
           <h2 class="text-2xl font-bold ">${converNumber}  ${getInnerText(titleForDistrict)} </h2>
           <p class="mt-3 bg-stone-100 p-3 rounded-lg"> Date: ${date.toLocaleDateString()}. <br/> Time: ${date.toLocaleTimeString()}.</p>
          `;
        historyCard.appendChild(cardForHistory);
    
        // show modal for successfully donation
        document.getElementById("my_modal_5").showModal();
        //   clear the input field
        document.getElementById(inputForDistrict).value = "";
      }
  }


