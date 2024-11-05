# Tarea #1

## Primera Sección
### **Utilice el procedimiento visto en clase para la conversión de los numeros decimales.**

(1) ¿Cual es el numero binario de 7?

![Captura de pantalla 2024-10-27 192230](https://github.com/user-attachments/assets/2c22202a-1494-4932-9398-38784563f924)

- El binario de 7 es 111.

(2) ¿Cual es el numero binario de 45?

![Captura de pantalla 2024-10-27 193142](https://github.com/user-attachments/assets/fb1080e7-c22c-44fe-905b-14ec59516c33)

- El binario de 45 es 101101.

(3) ¿Cual es el numero binario de 123?

![Captura de pantalla 2024-10-27 193626](https://github.com/user-attachments/assets/8b0ace0c-ad7f-4a18-a165-c0c0aa5586d8)

- El binario de 123 es 1111011.

(4) ¿Cual es el numero binario de 8.75?

Este se trabaja en dos partes la parte entera y la parte decimal, la parte entera es la siguiente:

![Captura de pantalla 2024-10-27 195517](https://github.com/user-attachments/assets/9107dbe5-5711-4bf8-bd38-babf9980ee74)

Esto da un resultado binario: 1000.

Ahora hacemos la parte decimal 0.75.

![Captura de pantalla 2024-10-27 200151](https://github.com/user-attachments/assets/55aa4fa3-fbca-4e6b-a633-037d771c31ec)

El resultado del decimal 0.75 a binario es: 11.

- El numero binario de 8.75 es: 1000.11.

(5) ¿Cual es el numero binario de -18?

Convierto el numero a positivo 18 y hago el mismo proceso de division.

![Captura de pantalla 2024-10-27 201528](https://github.com/user-attachments/assets/33988ed2-798d-4a1c-9347-b99a6b5aa1b7)

El resultado es 0001 0010, pero procedemos a cambiar los 0 por el numero 1 y sumamos 0000 0001 para el complemento a dos.

El numero binario de -18 en 8 bits es de 1110 1110.

### **Realice las tablas de verdad de las operaciones logicas booleana.**
a. A ^ B:
![Captura de pantalla 2024-11-03 220738](https://github.com/user-attachments/assets/c0f1bf0d-0344-49a9-9df7-c55b7807b50b)

b. (¬A ^ B) v C:
![Captura de pantalla 2024-11-03 221502](https://github.com/user-attachments/assets/6ccf69bf-b493-4737-84c5-b0f288c0e0cd)

c. ¬(A v C) ^ B:
![Captura de pantalla 2024-11-03 221959](https://github.com/user-attachments/assets/cdfa680d-bf8c-48fa-a110-b94a9280aa64)

d. (B ^ C)^(¬A)
![Captura de pantalla 2024-11-03 223304](https://github.com/user-attachments/assets/533aa791-b584-488d-ae4c-e5b6f63e4add)

e. (M ^ (¬A)) v (¬C):
![Captura de pantalla 2024-11-03 223800](https://github.com/user-attachments/assets/d8c8823a-d580-45db-b677-9801166aad2f)

## Segunda Sección.
A continuación, se presentan ejercicios los cuales deberá resolver utilizando el lenguaje
JavaScript utilizando NodeJS.

### **Ejercicio 1: Sistema de Evaluación de Riesgo**

Cree una función que evalúe el nivel de riesgo de un cliente bancario basado en varios factores.

- Defina la función evaluateRisk(income, hasLoans, latePayments, isStudent):
  - Un cliente es considerado de alto riesgo si:
    - Tiene ingresos menores a $20,000 y más de 3 pagos atrasados.
    - O Tiene préstamos activos y es estudiante.
  - Un cliente es considerado de riesgo moderado si:
    - Tiene ingresos entre $20,000 y $50,000, y no Aene más de 2 pagos
atrasados.
    - si Aene préstamos pero no es estudiante.
  - Si no cumple ninguna de estas condiciones, se considera de bajo riesgo.

- Retorne el nivel de riesgo como un string: 'High', 'Moderate' o 'Low'.
- Por ejemplo, el uso de la función sería:
  - console.log(evaluateRisk(15000, true, 4, true)); // "High"

![Captura de pantalla 2024-11-04 184453](https://github.com/user-attachments/assets/c122a2f1-b0b9-4b38-a28b-7fdcef80fd4b)

**Codigo utilizado:**
```
function evaluateRisk(income, hasLoans, latePayments, isStudent) {
    if ((income < 20000 && latePayments >= 3) || (hasLoans = true && isStudent == true)) {
    return 'High Risk';
   } else if (income > 20000 && income < 50000 && latePayments <= 2){
    return "Riskt Moderate";
   } else {
    return "Risk Low";
   }
}

console.log(evaluateRisk(15000, true, 4, true));

```

evaluateRisk(15000, true, 4, true);

### **Ejercicio 2: Motor de Recomendación de Productos***
Diseñe una función para recomendar productos a un usuario basado en varios factores.

- Cree una función recommendProduct(age, isMember, purchaseHistory):
  - Un producto de alta tecnología se recomienda si:
    - La persona es miembro y ha comprado al menos 5 productos tecnológicos antes.
    - O si la persona Aene entre 18 y 30 años y ha comprado 2 o más productos
de moda.
  - Un producto de moda se recomienda si:
    - La persona no es miembro, pero ha comprado al menos 3 productos antes.
    - O si Aene entre 25 y 40 años.
    - En cualquier otro caso, recomienda un producto genérico.
  - purchaseHistory es un objeto con la canAdad de productos comprados por categoría: {tech: number, fashion: number, other: number }.
  - Por ejemplo, el uso de la función sería:
    - console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); //
"High-Tech Product".

![Captura de pantalla 2024-11-04 183111](https://github.com/user-attachments/assets/3b5f23b9-3901-47c4-a319-ed0a88e94ed4)

**Codigo Utlizado:**

```
function recommendProduct(age, isMember, purchaseHistory){
    /* Recivo el objeto por medio de purchaseHistory*/
    let {tech, fashion, other} = purchaseHistory;

    /* Analiza */
    if ((isMember == true && tech >= 5) || (age >= 18 && age <= 30 && fashion >= 2)){
        return "Producto de Alta tecnologia"
    } else if ((isMember == false && (tech + fashion + other) >= 3) || (age >= 25 && age <=40)) /*(tech + Fashion + other suma los productos)*/{
        return "Producto de moda";
    } else /*Si ninguo de los anterires aplica*/ {
        return "Producto generico";
    }    
}
/*Test*/
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 }));
console.log(recommendProduct(30, false, { tech: 2, fashion: 1, other: 0 }));
console.log(recommendProduct(45, false, { tech: 1, fashion: 1, other: 0 }));

```




