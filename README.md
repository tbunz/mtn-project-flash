# Mountain Project Flash
## https://mtnprojflash.com/
### Reimagination of mountainproject.com for a personal portfolio
This project is entirely educational and not being used to generate any income. It is only public facing in order to explore and showcase skills related to web development. Other than me, very few users will ever interact with this site. \
\
Utilizes data from project @ https://github.com/tbunz/mtnprojapi (public facing API I created for mountainproject.com) 

### Component Structure
```
src/components/
├── App - manages highest level state of application
│ 
├── Display - main displays for climbing info
│   ├── ClimbDisplay - display for one selected climb
│   └── SearchDisplay - display for returned search info
│ 
├── Load - loading displays while waiting for API fetches
│ 
├── WelcomeSlide - home page / search page
│
│  (Below are more like libraries, not pages/displays)
├── Three - react-three-fiber 3D render stuff
│  
└── gAnimations - GSAP animations that fire upon mount/unmount of components. Animations that fire upon events are defined in components
```

### Summary of Tools
- React App
- GSAP animations
- ThreeJS (react-three-fiber) 3D models
- Hosted on DigitalOcean droplet
- Served by Nginx



### Citations
- Mountain Project (all information about rock climbs including: static images, names, descriptions, comments, reviews, GPS data)

