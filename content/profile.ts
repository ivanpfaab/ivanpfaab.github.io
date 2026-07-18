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
  bio: "I create tailored data engineering solutions that drive business success. With 6 years of experience as a Technical Solution Engineer, I focus on bespoke architectures that prioritize your unique organizational needs. Instead of relying on generic implementations, I specialize in custom integrations that guarantee conversion optimization and measurable ROI. My approach aligns technical strategies with business objectives, treating your goals with the same commitment I apply to my work. I believe infrastructure is a key driver of commercial success rather than just a support function. If you're looking for a data engineer who prioritizes personalization and business impact, I would love to connect and discuss how I can help elevate your projects.",
  photo: "/images/profile-picture.jpeg",
  location: "Buenos Aires, Argentina",
  social: {
    github: "https://github.com/ivanpfaab",
    linkedin: "https://www.linkedin.com/in/ivan-pfaab/",
    email: "pfaabivan@gmail.com",
  },
};
