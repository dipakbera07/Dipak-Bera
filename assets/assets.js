import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import download_dark from './download_dark.png';
import react from './react.png';
import nextjs from './next.webp'
import tailwindcss from './tailwind.webp';
import nodejs from './nodejs.png';
import express from './expressjs.png';
import javascript from './js.webp';
import cpp from './cpp.png';
import github from './github.png';
import postman from './postman.svg';
import python from "./python-logo.webp";
import numpy from './numpy.png';
import pandas from './pandas.webp';
import analysis from './analysis.png';
import leetcode from './leetcode-logo.png';
import linkedin from './linkedin.png';
import x from './x-logo.png';
import call from './call.png';



export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    download_dark,
    react,
    nextjs,
    tailwindcss,
    nodejs,
    express,
    mongodb,
    javascript,
    cpp,
    github,
    postman,
    python,
    numpy,
    pandas,
    analysis,
    x,
    linkedin,
    leetcode,
    call
    
};

export const workData = [
    {
        title: 'Chatify',
        description1: 'Developed a real-time messaging platform with secure user authentication',
        description2: 'Implemented real-time messaging and image sharing using Socket.IO and Cloudinary.',
        bgImage: "/chatify.png",
        link: "https://dipak-chatify.vercel.app/"
    },
    {
        title: 'Reels Pro',
        description1: 'Developed a social media platform for sharing images and videos',
        description2: 'Integrated ImageKit for media management and Resend for email verification.',
        bgImage: '/reels-pro.png',
        link: "https://dipak-reels-pro.vercel.app/"
    },
    
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const skillsData = [
  { icon: assets.react, name: "React" },
  { icon: assets.nextjs, name: "Next.js" },
  { icon: assets.tailwindcss, name: "Tailwind CSS" },

  { icon: assets.nodejs, name: "Node.js" },
  { icon: assets.express, name: "Express.js" },
  { icon: assets.mongodb, name: "MongoDB" },

  { icon: assets.numpy, name: "NumPy" },
  { icon: assets.pandas, name: "Pandas" },
  { icon: assets.analysis, name: "Basic Data Analysis" },

  { icon: assets.javascript, name: "JavaScript" },
  { icon: assets.cpp, name: "C++" },
  { icon: assets.python, name: "Python" },

  { icon: assets.git, name: "Git" },
  { icon: assets.github, name: "GitHub" },
  { icon: assets.postman, name: "Postman" },
];
export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Budge Budge Institute of Technology",
    cgpa: "7.5",
    percentage: "75%",
    date: "08/2024 - Present",
  },
  {
    degree: "Diploma in Computer Science and Technology",
    college: "Contai Polytechnic",
    cgpa: "7.4",
    percentage: "74%",
    date: "11/2021 - 04/2024",
  },
  {
    degree: "Secondary / Madhyamik",
    college: "Nilda High School",
    cgpa: null,
    percentage: "80%",
    date: "01/2015 - 04/2021",
  },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'Full-Stack Developer | AI & Data Science Enthusiast' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science and Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built and deployed multiple full-stack projects.' }
];

export const toolsData = [
  {
    icon: assets.linkedin,
    link: "https://www.linkedin.com/in/dipakbera07/",
  },
  {
    icon: assets.github,
    link: "https://github.com/dipakbera07",
  },
  
  {
    icon: assets.x,
    link: "https://x.com/dbera20050",
  },{
    icon: assets.leetcode,
    link: "https://leetcode.com/u/dipakbera07/",
  }
];