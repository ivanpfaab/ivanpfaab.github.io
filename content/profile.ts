export type Profile = {
  name: string;
  title: string;
  company: string;
  tagline: string;
  bio: string;
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
  // PLACEHOLDER — replace with your real bio.
  bio: "PLACEHOLDER — a couple of sentences about your background in data engineering, cloud engineering, and analytics, and what you're focused on now.",
  // PLACEHOLDER — drop your real photo at public/images/profile.jpg and
  // change this path to "/images/profile.jpg".
  photo: "/images/profile-placeholder.svg",
  // PLACEHOLDER
  location: "PLACEHOLDER — City, Country",
  social: {
    github: "https://github.com/ivanpfaab",
    // PLACEHOLDER — add your LinkedIn profile URL.
    linkedin: "PLACEHOLDER",
    email: "pfaabivan@gmail.com",
  },
};
