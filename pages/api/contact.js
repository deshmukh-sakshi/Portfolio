const items = [
  {
    social: 'email',
    link: 'deshmukhsakshi296@gmail.com',
    href: 'mailto:deshmukhsakshi296@gmail.com',
  },
  {
    social: 'github',
    link: 'deshmukh-sakshi',
    href: 'https://github.com/deshmukh-sakshi',
  },
  {
    social: 'linkedin',
    link: 'sakshideshmukh86',
    href: 'https://www.linkedin.com/in/sakshideshmukh86/',
  }
];

export default function handler(req, res) {
  res.status(200).json(items);
}
