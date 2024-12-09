import projects from './misc-projects.json';

export const getMiscProjects = () => {
  return projects.projects;
};

export default function handler(req, res) {
  res.status(200).json(projects.projects);
}