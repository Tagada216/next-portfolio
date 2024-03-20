# Developer Portfolio - D. Nicolas

---

# Demo :movie_camera:

![](./public/image/screen.png)

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/next-portfolio.git

cd next-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/said7388/next-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "FIRSTNAME LASTNAME",
  profile: "/profile.png",
  designation: "Full-Stack Software Developer",
  description: "My name is FIRSTNAME LAST....",
  email: "your_email@gmail.com",
  phone: "+33 06 12 13 14 15",
  address: "Lille, France",
  github: "https://github.com/said7388",
  facebook: "https://www.facebook.com/user_name",
  linkedIn: "https://www.linkedin.com/in/<your-name>/",
  twitter: "https://twitter.com/<your-id>",
  stackOverflow: "https://stackoverflow.com/users/<id>/<your-name>",
  leetcode: "https://leetcode.com/<your-name>/",
  devUsername: "Your-Dev-Username",
  resume: "...",
};
```

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---

## Source

Design based on [Nicolas Delcourt](https://dev.to/said7388/build-an-awesome-next-portfolio-website-4cj9?ref=dailydev) project and [Mosh Hamedani's](https://codewithmosh.com/).
