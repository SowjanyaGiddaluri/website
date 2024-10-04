import React, { useState } from "react";

import Header from './components/Header/Header';
import ProjectItem from './components/ProjectItem/ProjectItem';
import TabItem from './components/TabItem/TabItem';

import './App.css';

const tabsList = [
    { tabId: 'STATIC', displayText: 'Static' },
    { tabId: 'RESPONSIVE', displayText: 'Responsive' },
    { tabId: 'DYNAMIC', displayText: 'Dynamic' }
];

const projectsList = [
    {
        projectId: 0,
        category: 'STATIC',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
        title: 'Music Page',
        description: 'The music page enables the users to browse through the images of all-time favourite music albums',
    },
    {
        projectId: 1,
        category: 'STATIC',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
        title: 'Music Page',
        description: 'The music page enables the users to browse through the images of all-time favourite music albums',
    },
    {
        projectId: 2,
        category: 'STATIC',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
        title: 'Music Page',
        description: 'The music page enables the users to browse through the images of all-time favourite music albums',
    },
    {
        projectId: 3,
        category: 'RESPONSIVE',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
        title: 'Tourism',
        description: 'A responsive tourism website showcasing various destinations',
    },
    {
        projectId: 4,
        category: 'RESPONSIVE',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
        title: 'Tourism',
        description: 'A responsive tourism website showcasing various destinations',
    },
    {
        projectId: 5,
        category: 'RESPONSIVE',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
        title: 'Tourism',
        description: 'A responsive tourism website showcasing various destinations',
    },
    {
        projectId: 6,
        category: 'DYNAMIC',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
        title: 'Blog Platform',
        description: 'A dynamic blog platform with user authentication and CRUD operations',
    },
    {
        projectId: 7,
        category: 'DYNAMIC',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
        title: 'Blog Platform',
        description: 'A dynamic blog platform with user authentication and CRUD operations',
    },
    {
        projectId: 8,
        category: 'DYNAMIC',
        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
        title: 'Blog Platform',
        description: 'A dynamic blog platform with user authentication and CRUD operations',
    },
];

const App = () => {
    const [activeTabId, setActiveTabId] = useState('STATIC');

    const handleTabClick = (tabId) => {
        setActiveTabId(tabId); // Update the active tab state
    };

    const filteredProjects = projectsList.filter(
        (project) => project.category === activeTabId
    );

    return (
        <div>
            <Header />
            <div className="content-container">
                <h1 className="title">Projects</h1>
                <p className="description">
                    Your skills and achievements showcase your strengths and abilities. Speak about any new skills or software you learned to perform the project responsibilities.
                </p>

                {/* Render tabs */}
                <ul className="tabs-list">
                    {tabsList.map((tab) => (
                        <TabItem
                            key={tab.tabId}
                            tabDetails={tab}
                            isActive={tab.tabId === activeTabId}
                            clickTabItem={handleTabClick} // Correctly pass click handler
                        />
                    ))}
                </ul>
                <ul className="projects-list">
                    {filteredProjects.map((project) => (
                        <ProjectItem
                            key={project.projectId}
                            projectId={project.projectId} // Pass projectId prop
                            imageURL={project.imageURL}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
