import React,{useState,createContext} from 'react';


export const ProjectContext=createContext();


export const ProjectProvider=(props) => {

    const [projects,setProjects]=useState([
        {
         
            width: 5,
            height: 5,
            diameter: 10,
            depth: 5,
            radius: 5,
            area: 5,
            perimeter: 5
        }
    ]);



    return (

        <ProjectContext.Provider value={[projects,setProjects]}>

            {props.children}

        </ProjectContext.Provider>

    )
}


