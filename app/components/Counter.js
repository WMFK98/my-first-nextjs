'use client';
import React from 'react';
import { useState } from 'react';

export default function Counter({ user }) {
  const [count, setCount] = useState(0);
  console.log(user);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
