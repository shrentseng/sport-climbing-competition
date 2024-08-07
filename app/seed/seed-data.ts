// function copyObjectExcept<T extends object, K extends keyof T>(
//   obj: T,
//   keysToExclude: K[]
// ): Omit<T, K> {
//   // Create a new object with type Omit<T, K>
//   return Object.keys(obj).reduce((acc, key) => {
//     if (!keysToExclude.includes(key as K)) {
//       (acc as T)[key as K] = obj[key as K];
//     }
//     return acc;
//   }, {} as Omit<T, K>);
// }

// export async function fetchAthletes() {
//   const res = await fetch(
//     "https://ifsc.results.info/api/v1/events/1386/registrations",
//     {
//       headers: {
//         Referer: "https://ifsc.results.info/",
//       },
//     }
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   const athletes = [];
//   for (let athlete of data) {
//     for (let dcat of athlete.d_cats) {
//       const ath = copyObjectExcept(athlete, [
//         "federation",
//         "federation_id",
//         "d_cats",
//       ]);
//       ath["dcat_id"] = dcat.id;
//       ath["dcat_name"] = dcat.name;
//       athletes.push(ath);
//     }
//   }
//   return athletes;
// }

// export async function fetchResultsByAthleteId(athlete_id: number) {
//   const res = await fetch(
//     `https://ifsc.results.info/api/v1/athletes/${String(athlete_id)}`,
//     {
//       headers: {
//         Referer: "https://ifsc.results.info/",
//       },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data.all_results;
// }
