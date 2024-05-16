const GENERAL_IMAGES = {
  circle: new URL("./colored_circle.png", import.meta.url).href,
  aboutMeCover: new URL("./about_me_cover.jpg", import.meta.url).href,
  aboutMePhoto: new URL("./about_me_photo.jpg", import.meta.url).href,
  error404: new URL("./error_404.png", import.meta.url).href,
};

const PROJECTS_IMAGES = (project) => ({
  cover_header: new URL(
    `./projects/${project}/cover_projects.jpg`,
    import.meta.url
  ).href,
  cover_card: new URL(`./projects/${project}/cover.png`, import.meta.url)
    .href,
});

// eslint-disable-next-line react-refresh/only-export-components
export { GENERAL_IMAGES, PROJECTS_IMAGES };
