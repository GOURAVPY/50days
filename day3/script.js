let menu = {
  pizza: 250,
  "french frise": 60,
  tacos: 120,
  "hot dogs": 80,
  sandwiches: 100,
  combo: 425,
};

function orderdisplay() {
  console.log("-----------------------------------------------\n");
  console.log("    MENU - what you like to order ?    ");
  console.log("-----------------------------------------------\n");

  for (const item in menu) {
    console.log(`${item} : $${menu[item]}\n`);

  }

}

function startorder() {

    total = 0;
    orders = true;
    


}

