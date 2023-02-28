import React from "react"
import Projects from "./DB.json"
import { useState } from "react"

interface Project {
    name: string;
    link: string;
    description: string;
}

export default function () {
    const [projectDB, setDB] = useState<Project[]>(Projects);
    const projectsList = projectDB.filter((element: Project) => element.)
        .map((element: Project) => (
            <ul>
                <li>
                    {element.name}
                    <ul>
                        <li>
                            {element.description}
                        </li>
                    </ul>
                </li>
            </ul>
        ))
    function handleProject() {
        return
    }
    return (
        <div id="right-side-content">
            <div id="iframe-container">
                <iframe src="https://haborym99.github.io/menu/" ></iframe>
            </div>
            <div id="additionnal-info">
                <h1 style={{ margin: "0%" }}>ProjectsInfo</h1>
                {projectsList}
                <div id="project-arrow">
                    <button onClick={handleProject}><i className="ri-arrow-left-fill"></i></button>
                    <button onClick={handleProject}><i className="ri-arrow-right-fill"></i></button>
                </div>
            </div>
        </div >
    );
}