import { useEffect, useState } from "react";

export default function getQuotes() {
  return fetch("https://tronalddump.io/random/quote").then((res) => res.json());
}
