import React from "react";
import { useState } from "react";

const FibonacciComponent = () => {
  // Using google search API (does a google search instead of company registers)
  //const API_URL = 'https://kgsearch.googleapis.com/v1/entities:search'
  // const API_KEY = 'AIzaSyCwJZrvxZId54viE-ROaIFnZVPc4ZUPjcY' //This private API key is derived from personal account, only for dev phase
  // const query_limit = 10
  // const URL = `${API_URL}?key=${API_KEY}&query=${companyName}&limit=${query_limit}`

  const [result, setResult] = useState("");
  var today = new Date();
  var birthday = new Date("November 22, 1994 03:24:00");
  var age = today.getFullYear() - birthday.getFullYear();
  var month;
  if (today.getMonth() > birthday.getMonth()) {
    month = today.getMonth() - birthday.getMonth();
  } else {
    age = age - 1;
    month = today.getMonth() - birthday.getMonth() + 12;
  }
  // console.error("Your age is " + age + " years and " + month + " months");
  console.error(age + "-" + month);

  const handlechange = (event) => {
    if (!event.target.value) return setResult("Forgetting something?");
    if (event.target.value < 0) return setResult("No negativity please");
    const fibonacciNo = fib(event.target.value);
    if (fibonacciNo === 0) return setResult("Too Large");
    setResult(fibonacciNo);
  };

  const fib = (n, memo = {}) => {
    if (n > 1476) return 0;
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  };

  return (
    <form>
      <br />
      <label>Calculate Fibonacci: </label>
      <input onChange={handlechange} type="number" placeholder="Input a number (< 1477)"/>
      <p>{result}</p>
    </form>
  );
};

export default FibonacciComponent;
