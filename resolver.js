import { getJobs, getJob } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";
export const resolvers = {
  Query: {
    jobs: async () => {
      return await getJobs();
    },
    job: async (_, { id }) => {
      return await getJob(id);
    },
  },
  Job: {
    company: async (job) => {
      return await getCompany(job.companyId);
    },
    date: (parent) => {
      const date = parent.createdAt.slice(0, "yyyy-mm-dd".length);
      return date;
    },
  },
};
