import React from "react"
import Projects from "./DB.json"
import { useState } from "react"
import '../App.css';

interface Project {
    name: string;
    link: string;
    description: string;
    key: number;
}

export default function () {
    const [projectDB, setDB] = useState<Project[]>(Projects);
    const [limite, setLimite] = useState(0);
    const actualProject = projectDB.find((element: Project) => element.key === limite)?.link;
    const projectsList = projectDB.filter((element: Project) => element.key === limite)
        .map((element: Project) =>
        (
            <div id="project-info-content">
                <h2>{element.name}</h2>
                <p>{element.description}</p>
            </div >
        ))
    function handleProject(e: React.MouseEvent<HTMLButtonElement>) {
        const eValue = e.currentTarget.value;
        if (eValue === "next" && limite < projectDB.length - 1) {
            setLimite(limite + 1);
        } else if (eValue === "previous" && limite >= 1) {
            setLimite(limite - 1)
        } else {
            return
        }
    }

    return (
        <div id="right-side-content">
            <div id="iframe-container">
                <iframe src={actualProject} title="interactive-project"></iframe>
            </div>
            <div id="additionnal-info">
                {projectsList}
                <div id="project-arrow">
                    <button onClick={handleProject}
                        value="previous"
                        style={{
                            left: "0%",
                            bottom: "0%",
                            border: "2px solid black",
                            borderLeft: "none",
                            borderBottom: "none"
                        }}>
                        <i className="ri-arrow-left-fill"></i>
                    </button>
                    <button onClick={handleProject}
                        value="next"
                        style={{
                            right: "0%",
                            bottom: "0%",
                            border: "2px solid black",
                            borderRight: "none",
                            borderBottom: "none"
                        }}>
                        <i className="ri-arrow-right-fill"></i>
                    </button>
                </div>
            </div>
        </div >
    );
}