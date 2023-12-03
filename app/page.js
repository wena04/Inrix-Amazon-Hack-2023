"use client";
import MyMap from './components/map'
import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar.jsx';
import MapSwitchButton from './components/mapSwitchButton';
import Chatbot from './components/chat';
export default function Home() {
  const [point1, setPoint1] = useState([
    [0.00, 0.00],
    [0.00, 0.00],
  ]);

  const [point2, setPoint2] = useState([
    [0.00, 0.00],
    [0.00, 0.00],
  ]);

  const [point3, setPoint3] = useState([
    [0.00, 0.00],
    [0.00, 0.00],
  ]);

  useEffect(() => {
    fetchData();
  }, []);
  var msg = new SpeechSynthesisUtterance("Speak Something")


  const fetchData = async () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Hiya";
    window.speechSynthesis.speak(msg);

  //   try {
  //     const response = await fetch("http://localhost:3001/findRoute");
  //     const result = await response.json();
  //     const routeSummary = result.json2.result.trip.routes[0].summary.text; 
  //     alert(routeSummary)
  //     msg.text = routeSummary.trim();
  //     window.speechSynthesis.speak(msg);

  //   } catch (error) {
  //     window.speechSynthesis.speak("COULDNT FETCH DATA");
  //     alert("meep", error);
  //     console.error("Error fetching data:", error);
  //   }
  };

  return (
    <div className="h-full bg-white h-screen">
      <MyMap point1={point1} point2={point2} point3={point3} />

      
      <Sidebar/>
      <div style={{ position: 'absolute', top: 50, right: 50, zIndex: 1000 }}>
          <MapSwitchButton />
      </div>
      <div style={{ position: 'absolute', top: 200, right: 50, zIndex: 3000 }}>
        <Chatbot />
      </div>
    </div>
    
  );
}
