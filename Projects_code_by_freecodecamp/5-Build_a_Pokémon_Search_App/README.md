# Build a Pokémon Search App

In this project, you'll build an app that will search for Pokémon by name or ID and display the results to the user. To retrieve the Pokémon data and images, you'll use freeCodeCamp's [PokéAPI Proxy](https://pokeapi-proxy.freecodecamp.rocks/).

## Objective
Build an app that is functionally similar to [https://pokemon-search-app.freecodecamp.rocks](https://pokemon-search-app.freecodecamp.rocks)

## User Stories:
1. You should have an `input` element with an `id` of `search-input`
2. You should have a `button` element with an `id` of `search-button`
3. You should have an element with an `id` of `pokemon-name`
4. You should have an element with an `id` of `pokemon-id`
5. You should have an element with an `id` of `weight`
6. You should have an element with an `id` of `height`
7. You should have an element with an `id` of `types`
8. You should have an element with an `id` of `hp`
9. You should have an element with an `id` of `attack`
10. You should have an element with an `id` of `defense`
11. You should have an element with an `id` of `special-attack`
12. You should have an element with an `id` of `special-defense`
13. You should have an element with an `id` of `speed`
14. When the `#search-input` element contains the value `Red` and the `#search-button` element is clicked, an alert should appear with the text `Pokémon not found`
15. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, and `#special-defense` elements should be `PIKACHU`, `#25` or `25`, `Weight: 60` or `60`, `Height: 4` or `4`, `35`, `55`, `40`, `50`, `50`, and `90`, respectively
16. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, you should add an `img` element with the `id` of `sprite` and the `src` set to the Pokémon's `front_default` sprite to the page
17. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the `#types` element should contain a single inner element with the value `ELECTRIC`
18. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, and `#special-defense` elements should be `GENGAR`, `#94` or `94`, `Weight: 405` or `405`, `Height: 15` or `15`, `60`, `65`, `60`, `130`, `75`, and `110`, respectively
19. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, you should add an `img` element with the `id` of `sprite` and the `src` set to the Pokémon's `front_default` sprite to the page
20. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the `#types` element should contain two inner elements with the text values `GHOST` and `POISON`, respectively

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

**Note**: *When running the tests, there will be a slight delay. Please wait a few seconds to allow the tests to finish. Do not refresh the page before they are done.*
