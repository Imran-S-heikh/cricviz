export const ballToOver = (balls: number)=>{
  const ball = balls % 6;
  const over = Math.floor(balls/6);
  return `${over}.${ball}`
}

let b = ballToOver;
console.log(b(8))
console.log(b(12))
console.log(b(15))
console.log(b(6))