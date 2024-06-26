const openModalBtn = document.querySelector("#open-modal");
const backdrop = document.querySelector(".backdrop");
const tbody = document.querySelector(".trans-info");
const searchInput = document.querySelector("#search");

const selectPriceTag = document.querySelector(".select-order-price");
const selectDateTag = document.querySelector(".select-order-date");


openModalBtn.addEventListener("click", () => {
  backdrop.classList.remove("hidden");

  axios
    .get("http://localhost:3000/transactions")
    .then((res) => {
      displayTrans(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

function displayTrans(data) {
  tbody.innerHTML = "";
  data.forEach((item) => {
    const transDiv = document.createElement("tr");
    transDiv.classList = ".transactions";
    transDiv.innerHTML = `
                
                  <td class="id">${item.id}</td>
                  <td class="type">${item.type}</td>
                  <td class="price">${item.price}</td>
                  <td class="issue">${item.refId}</td>
                  <td class="trans-date">${new Date(item.date).toLocaleString("fa")}</td>
                
    `;
    tbody.appendChild(transDiv);
  });
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  axios
    .get(
      ` http://localhost:3000/transactions?refId_like=${query}&_sort=price&_order=asc`
    )
    .then((res) => {
      displayTrans(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Price
selectPriceTag.addEventListener("change", (e) => {
  const selectedOption = e.target.value;
  if (selectedOption === "ascending") {
    axios
      .get("http://localhost:3000/transactions?_sort=price&_order=asc")
      .then((res) => {
        displayTrans(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (selectedOption === "descending") {
    axios
      .get("http://localhost:3000/transactions?_sort=price&_order=desc")
      .then((res) => {
        displayTrans(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// Date
selectDateTag.addEventListener("change", (e) => {
  const selectedOption = e.target.value;
  if (selectedOption === "ascending") {
    axios
      .get("http://localhost:3000/transactions?_sort=date&_order=asc")
      .then((res) => {
        displayTrans(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (selectedOption === "descending") {
    axios
      .get("http://localhost:3000/transactions?_sort=date&_order=desc")
      .then((res) => {
        displayTrans(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
