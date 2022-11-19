/**
 * This function get a path from an emoji and return the URL of the image using the GitHub API
 * @param  {string} path - The path of the emoji in data.json
 * @returns string
 */
function getImageURLFromGitHub(path: string): string {
  const url = `https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/${path}`;
  return url;
}

export default getImageURLFromGitHub;
