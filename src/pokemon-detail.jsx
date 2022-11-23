import React from "react";

function suspensify(promise) {
  let status = "pending";

  // pending
  if (status === "pending") {
    throw promise;
  }

  // rejected
  if (status === "rejected") {
    throw Error;
  }

  // resolved
  if (status === "resolved") {
    return {
      name: "Fake Pokemon",
    };
  }
}

let pokemon = suspensify(
  fetch("https://pokeapi.co/api/v2/pokemon/1").then((response) =>
    response.json()
  )
);

export default function PokemonDetail() {
  return <div>{pokemon.name}</div>;
}
