export type Project = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  /** Project thumbnail. Prefer 640×400 (or same 8:5 ratio). */
  image?: string;
  tags: string[];
  /** Shown on the Home page (max 2). */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "gtm-ga4-auto-annotations",
    description:
      "Apps Script that watches GTM publishes and creates GA4 reporting annotations when enabled platforms change.",
    repoUrl: "https://github.com/ivanpfaab/gtm-ga4-auto-annotations",
    image: "/images/projects/Ga4GTMAnnotations.png",
    tags: ["Analytics", "Automation"],
    featured: true,
  },
  {
    name: "ga4-rfm-model",
    description:
      "RFM customer segmentation from Google Analytics 4 — clustering, labeled audiences, and export for activation.",
    repoUrl: "https://github.com/ivanpfaab/ga4-rfm-model",
    image: "/images/projects/Ga4RFM.png",
    tags: ["Analytics", "Python"],
    featured: true,
  },
  {
    name: "dbt-by-example",
    description:
      "Local dbt development examples with Airflow and Docker Compose.",
    repoUrl: "https://github.com/ivanpfaab/dbt-by-example",
    image: "/images/projects/dbtByExampleImg.png",
    tags: ["Data Engineering"],
  },
  {
    name: "gcp-terraform-services",
    description:
      "Standalone Terraform templates for common GCP services — Pub/Sub, Cloud Run, Workflows, Eventarc, and Dataflow.",
    repoUrl: "https://github.com/ivanpfaab/gcp-terraform-services",
    image: "/images/projects/GCPTerraformServices.png",
    tags: ["Infrastructure", "GCP"],
  },
  {
    name: "streaming-pipeline-example",
    description:
      "Local streaming pipeline with Flink or Spark, plus Terraform deploys to EKS, AKS, or GKE.",
    repoUrl: "https://github.com/ivanpfaab/streaming-pipeline-example",
    image: "/images/projects/StreamingPipeline.jpeg",
    tags: ["Data Engineering", "Infrastructure"],
  },
];
