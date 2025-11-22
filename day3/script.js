let menu = {
  pizza: 250,
  "french frise": 60,
  tacos: 120,
  "hot dogs": 80,
  sandwiches: 100,
  combo: 425,
};

function orderdisplay(total) {
  console.log("-----------------------------------------------\n");
  console.log("    MENU - what you like to order ?    ");
  console.log("-----------------------------------------------\n");

  for (const item in menu) {
    console.log(`${item} : $${menu[item]}\n`);
  }
  console.log("---------------------------------------------\n");
  console.log(`CURRent TOTAL: $${total}\n`);
  console.log('type anitem name (e.g. "combo") or "checkout" \n');
}

function startorder() {
  let total = 0;
  let orders = true;
  console.log("===============================================\n");
  console.log("       WELCOME TO FAST FOOD ORDERING SYSTEM     \n");
  console.log("===============================================\n");

  while (orders) {
    orderdisplay(total);
    let userinput = prompt("Enter your order: ").toLowerCase();
    if (userinput === "null") {
      console.log("Thank you for visiting. Goodbye!");
      orders = false;
      break;
    }
    let order = userinput.toLowerCase().trim();
    if (order === "checkout") {
      orders = false;
      break;
    }
    if (menu[order]) {
      const itemprice = menu[order];
      total += itemprice;
      console.log(
        `You have added ${order} to your order. $${itemprice} has been added to your total.\n`
      );
    }
  }
}
