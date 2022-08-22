document.querySelector(".connect").addEventListener("click", () => {
    document.querySelector(".connect").textContent="Wallet Connected";
});

document.querySelectorAll(".wallet-cta")[0].addEventListener("click", () => {
    document.querySelectorAll(".wallet-cta")[0].textContent="Connect wallet";
});

document.querySelector(".create").addEventListener("click", () => {
    createCharity = document.querySelector(".create-charity");
    createCharity.style.display="block";
});

document.querySelector(".create-charity .btn").addEventListener("click", () => {
    document.querySelector(".create-charity").style.display="none";
})

document.querySelectorAll(".block")[0].addEventListener("click", () => {
    window.location.reload();
});

document.querySelectorAll(".block")[1].addEventListener("click", () => {
    document.querySelectorAll(".block")[0].style.cssText += 'color: inherit; border-bottom: none';
    document.querySelectorAll(".block")[1].style.cssText += 'color: var(--ter-300); border-bottom: 2px solid var(--primary-400)';
    document.querySelector(".donations-block").innerHTML = `
        <div class="donations-details">
            <i class="fa-solid fa-arrow-down-right"></i>
            <h5>Lorem Donation</h5>
            <span>2.5 ETH</span>
        </div>
        <div class="donations-details">
            <i class="fa-solid fa-arrow-down-right-dots"></i>
            <h5>Lorem Donation</h5>
            <span>2.5 ETH</span>
        </div>
        <div class="donations-details">
            <i class="fa-solid fa-arrow-down-right-dots"></i>
            <h5>Lorem Donation</h5>
            <span>2.5 ETH</span>
        </div>
        <div class="donations-details">
            <i class="fa-solid fa-arrow-down-right-dots"></i>
            <h5>Lorem Donation</h5>
            <span>2.5 ETH</span>
        </div>
        <div class="donations-details">
            <i class="fa-solid fa-arrow-down-right-dots"></i>
            <h5>Lorem Donation</h5>
            <span>2.5 ETH</span>
        </div>
`
});

