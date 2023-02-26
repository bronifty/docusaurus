import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Therapist Eliza",
    Svg: require("@site/static/img/project-1.svg").default,
    description: (
      <>
        <a href="https://therapist-ai-eliza.vercel.app/">Site Link</a>
        <p>
          A connect web protocol buffer with gRPC POC that talks to a therapist
          AI named Eliza
        </p>
        <a href="https://github.com/bronifty/buf.build-connect-web-example">
          View on GitHub
        </a>
      </>
    ),
  },
  {
    title: "React Query TODOS",
    Svg: require("@site/static/img/project-2.svg").default,
    description: (
      <>
        <a href="https://vite-vercel-opal.vercel.app/">Site Link</a>
        <p>An adaptation of John Smilga’s first Node project with vanilla js</p>
        <a href="https://github.com/bronifty/serverless-mern-stack-vite">
          View on GitHub
        </a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
