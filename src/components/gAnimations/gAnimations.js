import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// TODO - Make these all  gsap timelines. Way better for coordinating order
//          of animations. Not relevant for all right now, but could be.

// These are all GSAP animations that occur during/before mount/unmount. Not while rendered

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
