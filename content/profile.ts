export type Profile = {
  name: string;
  title: string;
  company: string;
  tagline: string;
  bio: string[];
  photo: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export const profile: Profile = {
  name: "Ivan Pfaab",
  title: "Sr. Technical Solutions Engineer",
  company: ".Monks",
  tagline: "Data Engineer · Cloud Engineer · Analytics",
  bio: [
    "Over the past 6 years, I've worked across data engineering, cloud architecture, and data analytics, currently as a Technical Solutions Engineer at .Monks. Along the way, I've come to see infrastructure less as a support function and more as something that shapes what a business can actually do: pipelines, platforms, and data models underneath a product are rarely just plumbing, they're often the reason it can (or can't) scale.",
    "This site is where I write about what that experience has taught me, from starting the data collection process, bulding warehouse solutions, to broader questions about where the industry is headed.",
  ],
  photo: "/images/profile-picture.jpeg",
  location: "Buenos Aires, Argentina",
  social: {
    github: "https://github.com/ivanpfaab",
    linkedin: "https://www.linkedin.com/in/ivan-pfaab/",
    email: "pfaabivan@gmail.com",
  },
};
