"use client";
declare const require: any;

const imgPaths = (siteRef: string) => {
  const context = require.context(
    `../public`,
    true, // Include subdirectories
    /\.(png|jpe?g|svg)$/
  );

  const keys = context.keys();

  const filteredKeys = keys.filter((key: any) => key.includes(`/${siteRef}`));

  const imagePaths = filteredKeys.map((key: any) => context(key));

  return imagePaths;
};

export default imgPaths;
