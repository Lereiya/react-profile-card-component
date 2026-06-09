// src/App.js
import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ProfileCard 
        name="Johnson Kimani"
        role="Software Engineer"
        location="Nairobi, Kenya"
        bio="Building tech solutions for African communities. Passionate about React and mobile development."
      />
      <ProfileCard 
        name="Eden Clarke"
        role="Product Designer"
        location="Austin, Texas"
        bio="Creating beautiful and functional user experiences for 8+ years."
      />
      <ProfileCard 
        name="Adam Smith"
        role="Data Scientist"
        location="Barcelona, Spain"
        bio="Turning data into insights. ML enthusiast and coffee lover."
      />
    </div>
  );
}

export default App;