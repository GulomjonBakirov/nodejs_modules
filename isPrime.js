console.log("Child Created", process.pid);

process.on("message", (message) => {
  const result = is_prime(message);

  process.send(result);

  process.exit(1);
});

function is_prime(number) {
  const factors = [];

  if (number < 1) return false;
  if (number == 1) return true;

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      factors.push(i);
    }
  }

  return { number, factors, isPrime: factors.length > 0 ? true : false };
}
