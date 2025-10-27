function userName(firstName,lastName) {
    let first = firstName.slice(0, 4).toLowerCase();
    let last = lastName.slice(0, 4).toLowerCase();
    let randomNumber = Math.floor(Math.random() * 900) + 100;

    let genName = first + last + randomNumber;
    console.log(`Generated Name is : ${genName}`);
}
userName("Ananth","kumar");