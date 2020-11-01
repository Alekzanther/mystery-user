import User from "../types/User";

export default async function FetchUser(): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    fetch("https://randomuser.me/api/") //fetch random user
      .then((response) => response.json()) //convert to json
      .then((responseJson) => responseJson.results[0]) //forward the actual details
      .then((userJson) => {
        let user: User = {
          name: userJson.name.first + " " + userJson.name.last,
          nationality: userJson.nat,
          location: userJson.location.city + ", " + userJson.location.country,
          email: userJson.email,
          phone: userJson.phone,
          age: userJson.dob.age,
          picture: {
            thumbnailUrl: userJson.picture.thumbnail,
            mediumUrl: userJson.picture.medium,
            largeUrl: userJson.picture.large,
          },
        };

        resolve(user);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}
