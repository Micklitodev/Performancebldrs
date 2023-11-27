"use client";

declare const require: any;

const imgPaths: Function = (siteRef: string) => {
  const context = require.context(
    `../public`,
    true, // Include subdirectories
    /\.(png|jpe?g|svg)$/
  );

  const keys = context.keys();

  const filteredKeys = keys.filter((key: any) => key.includes(`/${siteRef}`));

  const imagePaths = filteredKeys.map((key: any) => context(key));

  console.log('reload')
  return imagePaths;
};

export default imgPaths;
