interface Technology {
    id: string; // np. UUID lub unikalny hash
    name: string;
    imageSrc: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
}

import { useState } from "react";
import "./ProjectCard.css"
import templateImg from './assets/hero.png';


function ProjectCard(props: ProjectCardProps) {

    const [projectStatus, setProjectStatus] = useState(true);

    function changeStatus(){
        setProjectStatus(!projectStatus);
    }

  
    const elements = props.technologies.length;
    const templateCopies = Math.max(elements-1, 1);

    const templateHeight = 179;
    const templateShift = 72;
    const techStackHeight = templateHeight + (templateCopies-1)*templateShift;
    const ulPadding = 17.5
    const ulHeight = elements*72 + 2*ulPadding;

    return (
        <>
            <h1 className="text-2xl font-bold mb-8">{props.title}</h1>
            <p className="text-gray-600 text-lg mb-8">{props.description}</p>
            <p className="text-xl text-lg mb-8 ">
                <span className="text-3xl align-middle"><button onClick={changeStatus}>🔄</button></span>
                <span className="align-middle">Stan projektu: <span className="font-bold">{projectStatus ? " Ukończony" : " W trakcie"}</span></span>
            </p>
            <h2 className="text-xl font-bold">
                Gorące podziękowania dla twórców poniższych technologii. <br></br>
                Bez nich, stworzenie tego arcydzieła byłoby niemożliwe.
            </h2>
            <div className="techStack" style={{height: `${techStackHeight}px`}}>
                <div className="wrapper">
                    {
                        // Despite ES 2025 adding map etc. to iterators, react complains whent it is not converted to array first
                        [...Array(templateCopies).keys()].map(index => 
                            <img key={index} src={templateImg} className="base" width="170" height="179" style={{top:`${index*templateShift}px`}} />
                        )
                    }
                    {
                        props.technologies.map((technology, index) => 
                            <img key={index} src={technology.imageSrc} className="logo" style={{top:`${32 + index*templateShift}px`}}/>
                        )
                    }
                </div>
                <ul style={{height: `${ulHeight}px`, paddingTop: `${ulPadding}px`, paddingBottom: `${ulPadding}px`}}>
                {
                   props.technologies.map((technology, index) => 
                        <li key={index}><span>{technology.name}</span></li>
                    )
                }
                </ul>
            </div>
        </>
    );
}

export default ProjectCard;