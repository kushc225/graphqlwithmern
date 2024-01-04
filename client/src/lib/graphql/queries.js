import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export async function getJob(id) {
  const query = gql`
    query ($id: ID!) {
      job(id: $id) {
        id
        title
        date
        company {
          name
          description
        }
      }
    }
  `;

  const { job } = await client.request(query, { id });
  return job;
}

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        title
        date
        company {
          name
          description
        }
      }
    }
  `;
  try {
    const { jobs } = await client.request(query);
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}
