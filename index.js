async function testing() {
    let response = await fetch("http://localhost:3000/test");
    let product = await response.text();

    console.log(product);
};


testing();