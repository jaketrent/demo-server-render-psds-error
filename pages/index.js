import Head from "next/head";
import { ForbiddenErrorPage } from "@pluralsight/ps-design-system-errors/react";
import React from "react";

export default () => (
  <div>
    <Head>
      <title>Demo PSDS Server Render</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cloud.typography.com/6966154/6397212/css/fonts.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/@pluralsight/ps-design-system-normalize"
      />
      <style>{`
        body {
          background: #171717;
        }
      `}</style>
    </Head>
    <ForbiddenErrorPage />
  </div>
);
