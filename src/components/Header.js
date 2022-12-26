import React from 'react';
import NavBar from "../components/NavBar";

export default function Header(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <header>
            <div>
                <h2>Dejah Harris React Portfolio</h2>
            </div>
            <div>
                <NavBar currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                        ></NavBar>
            </div>
        </header>
    );
}