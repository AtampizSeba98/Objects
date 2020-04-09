/*

1. Escriba un comando que incluya el lenguaje **“Go”** al final del array lenguages

2. Modifica el valor de **difficulty** al valor de **8**

3. Remové la key site del objeto **programming**

4. Agregá una nueva key llamada **isFun** con el valor true al objeto **programming**

5. Mostrá por consola el contenido de **lenguages**

6. Mostrá por consola todas las key del objeto **programming**

7. Mostrá por consola todos los value del objeto **programming***/


var programming = {
 
    languages: ["Pyton", "Javascript", "React"],
  
    isCompetition: true,
   
   isStart: true,
   
   difficulty: 8,
   
  
    site: "https://gitlab.com/victorchalian/training-javascript"
 };
 //1
 programming.languages.push("go");

 //2
programming.difficulty=2;

//3
delete programming["site"];

//4
programming.isFun = true;

//5
console.log(programming.languages);

//6
console.log(Object.keys(programming));

//7
for (x in programming){console.log(programming[x]);}



