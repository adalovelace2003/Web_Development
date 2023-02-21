// const temperatures = [3,4,-2,-3,10,1,"error"];

// const calcTempAmplitude = function (t1,t2) {

//   let temps = t1.concat(t2)
//   console.log(temps)
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures,[1,2,3,-5]))

const measureKelvin = function(){
    const measurement = {
        type : 'temp',
        unit : 'celsius',
        value : prompt('Degrees celsius')
    }
    const kelvin = Number(measurement.value) + 273
    return kelvin
}
// 
console.log(measureKelvin())

  
