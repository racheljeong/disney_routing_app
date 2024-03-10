//https://disney_api.nomadcoders.workers.dev/characters
//https://disney_api.nomadcoders.workers.dev/characters/:id

const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export function disneysAll() {
    return fetch(`${BASE_URL}`).then((response) => response.json());
  }

export function disneyOne (disneyId: string) {

    return fetch(`${BASE_URL}/${disneyId}`).then((response) =>
        response.json()
);
}