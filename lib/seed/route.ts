// To set up this route move it under app folder

// import { db } from "@vercel/postgres";
// import { fetchAthletes, fetchResultsByAthleteId } from "./seed-data";

// const client = await db.connect();

// async function seedAthletes() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS athletes (
//       athlete_id INTEGER PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       firstname VARCHAR(255) NOT NULL,
//       lastname VARCHAR(255) NOT NULL,
//       gender INTEGER NOT NULL CHECK (gender IN (0, 1)),
//       country VARCHAR(255) NOT NULL,
//       dcat_id INTEGER NOT NULL,
//       dcat_name VARCHAR(255) NOT NULL
//     );
//   `;
//   const athletes = await fetchAthletes();
//   const insertedUsers = await Promise.all(
//     athletes.map(async (athlete: any) => {
//       return client.sql`
//         INSERT INTO athletes (athlete_id, name, firstname, lastname, gender, country, dcat_id, dcat_name)
//         VALUES (${athlete.athlete_id}, ${athlete.name}, ${athlete.firstname}, ${athlete.lastname}, ${athlete.gender}, ${athlete.country}, ${athlete.dcat_id}, ${athlete.dcat_name})
//         ON CONFLICT (athlete_id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedUsers;
// }

// async function seedResults() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS results (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       season VARCHAR(10),
//       rank INTEGER,
//       discipline VARCHAR(50),
//       event_name VARCHAR(255),
//       event_id INTEGER NOT NULL,
//       event_location VARCHAR(255),
//       d_cat INTEGER,
//       date DATE,
//       category_name VARCHAR(50),
//       result_url VARCHAR(255),
//       athlete_id INTEGER NOT NULL,
//       CONSTRAINT fk_athlete FOREIGN KEY (athlete_id) REFERENCES athletes(athlete_id)
//     );
//   `;
//   const { rows } = await client.sql`
//     SELECT athlete_id from athletes
//   `;
//   for (const row of rows as { athlete_id: number }[]) {
//     const results = await fetchResultsByAthleteId(row.athlete_id);
//     console.log(row.athlete_id);
//     const insertedResults = await Promise.all(
//       results.map(
//         (result: any) => client.sql`
//           INSERT INTO results (season, rank, discipline, event_name, event_id, event_location, d_cat, date, category_name, result_url, athlete_id)
//           VALUES (${result.season}, ${result.rank}, ${result.discipline}, ${result.event_name}, ${result.event_id}, ${result.event_location}, ${result.d_cat}, ${result.date}, ${result.category_name}, ${result.result_url}, ${row.athlete_id})
//           ON CONFLICT (id) DO NOTHING;
//         `
//       )
//     );
//   }

//   return;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedAthletes();
//     await seedResults();
//     await client.sql`COMMIT`;

//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
