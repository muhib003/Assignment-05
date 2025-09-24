// Heart Button Functionalities
document.getElementById("cart-container").addEventListener("click", function (e) {
    let totalHeartCount = Number(getElement("total-heart").innerText);
    if (e.target.className.includes("fa-heart")) {
        totalHeartCount++
        getElement("total-heart").innerText = totalHeartCount;
    }
});


// call Button Functionalities
document.getElementById("cart-container").addEventListener("click", function (e) {
    let totalCoins = Number(getElement("total-coin").innerText);
    const cartHistory = getElement("history-container");

    if (e.target.className.includes("btn-call")) {
        const callButton = e.target;
        const serviceName = callButton.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = callButton.parentNode.parentNode.children[2].children[0].innerText;

        if (totalCoins < 20) {
            alert("You don't have enough coin to call this number")
            return;
        }

        alert(`📞 calling ${serviceName} : ${serviceNumber}`);

        totalCoins = totalCoins - 20;
        getElement("total-coin").innerText = totalCoins;

        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center mb-3 bg-[#fafafa] p-4 rounded-lg">
                                <div>
                                    <h2>${serviceName}</h2>
                                    <p class= text-gray-600>${serviceNumber}</p>
                                </div>
                                <div>
                                    <p>${new Date().toLocaleTimeString()}</p>
                                </div>
                            </div>
        `;
        cartHistory.append(div);
    };
});

// Clear History
document.getElementById("btn-clear").addEventListener("click",function(){
    getElement("history-container").innerText = "";
});

// Copy Button Functionalities
document.getElementById("cart-container").addEventListener("click",function(e){
    if(e.target.className.includes("btn-copy")){
        const copyButton = e.target;
        const serviceNumber = copyButton.parentNode.parentNode.children[2].children[0].innerText;
        navigator.clipboard.writeText(serviceNumber);

        alert(`নম্বরটি কপি হয়েছে : ${serviceNumber}`);

        let totalCopy = Number(getElement("total-copy").innerText);
        totalCopy++;
        getElement("total-copy").innerText = totalCopy;
    }
});