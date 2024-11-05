function recommendProduct(age, isMember, purchaseHistory){
    let {tech, fashion, other} = purchaseHistory;
    if ((isMember == true && tech >= 5) || (age >= 18 && age <= 30 && fashion >= 2)){
        return "Producto de Alta tecnologia"
    } else if ((isMember == false && (tech + fashion + other) >= 3) || (age >= 25 && age <=40)){
        return "Producto de moda";
    } else {
        return "Producto generico";
    }    
}

console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 }));
console.log(recommendProduct(30, false, { tech: 2, fashion: 1, other: 0 }));
console.log(recommendProduct(45, false, { tech: 1, fashion: 1, other: 0 }));