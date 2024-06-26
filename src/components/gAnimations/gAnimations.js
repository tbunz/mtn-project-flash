import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// TODO - Make these all  gsap timelines. Way better for coordinating order
//          of animations. Not relevant for all right now, but could be.

// These are all GSAP animations that are NOT fired on event. On event are defined in components themselves 

// Called in WelcomeSlides
export function MountAnimationWelcome() {
    useGSAP(() => {
        gsap.from(".title", {
            opacity: 0,
            duration: 2,
            ease: "power1.in"
        })
        gsap.from(".title", {
            left: "35%",
            duration: 2,
            ease: "power1.out"
        })
        gsap.from(".search", {
            opacity: 0,
            duration: 2,
            ease: "power1.in"
        });
        gsap.from(".search", {
            top: "80%",
            duration: 2,
            ease: "power1.out"
        })
      },
    );
}
//Called in Load
export function UnmountAnimationWelcome() {
    useGSAP(() => {
        gsap.to(".title", {
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        })
        gsap.to(".title", {
            left: "35%",
            duration: 1,
            ease: "power1.in"
        })
        gsap.to(".search", {
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        });
        gsap.to(".search", {
            top: "80%",
            duration: 1,
            ease: "power1.in"
        })
      },
    );
}

// Called in ClimbDisplay
export function MountAnimationClimbDisplay() {
    useGSAP(() => {
        gsap.to("#climbDisplay", {
            opacity: 100,
            duration: 1.5,
            ease: "power1.in"
        })
      },
    );
}