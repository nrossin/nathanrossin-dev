import React from 'react';
import SectionBox from './SectionBox.tsx';

const HomeSection: React.FC = () => {
    return (
        <SectionBox id="home"
                    title="Welcome to My Portfolio"
                    subtitle="I am a Full Stack Developer"
        >
            I am a child!

        </SectionBox>
    );
};

export default HomeSection;