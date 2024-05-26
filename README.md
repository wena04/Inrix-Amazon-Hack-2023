# SMART FUEL

Check out our demo by clicking the image below:

<a href="https://www.youtube.com/watch?v=ymhVzAWl8dk">
  <img width="262" alt="Screenshot" src="https://github.com/wena04/Inrix-Amazon-Hack-2023/assets/152733514/14889ef7-3d7f-44fb-8e4d-6358ef6bd115">
</a>

Or watch it directly on [YouTube](https://www.youtube.com/watch?v=ymhVzAWl8dk).

## Inspiration
When you search for gas on most map applications, you are recommended gas stations based on proximity rather than fuel cost, with some companies even sponsoring results. If truck drivers or even regular commuters consistently pick the the options recommended to them (often the closest not cheapest one) this can quickly add up across thousands of miles.

## What it does
Our web platform allows the user to toggle between 2 routes that both include a pitstop for gas -- the shortest and the cheapest one in terms of gas cost, visualizing a clear route on our map interface.

We use AI to provide a unique experience for drivers looking to find the most efficient and affordable routes. Our inhouse AI chatbot provides an experience akin to chatting with an old friend. 

## How we built it
We created our website using React and Next.js, making it user-friendly and responsive. For dynamic and interactive maps, we harnessed the capabilities of Leaflet, an open-source mapping library and INRIX to analyze the route . To optimize routes, we utilized APIs from both Intrix for route finding and Google Maps for querying the nearest gas stations. For our generative AI chatbot, we used a custom model text model (dialogueGPT) that we trained to both chat and provide valuable navigation information. 

For simplicity during the hackathon, we used R studio to find an uniform vehicle efficiency of 25.2 miles per gallon, sourced from the Automotive Trends Report by the Environmental Protection Agency. We also gathered gas prices from the google maps and INRIX apis even though they were inaccessible to us. 

## Challenges we ran into
Integrating the Maps API posed initial hurdles—we experimented with Mapbox before opting for Leaflet. While Leaflet offered a ReactJS wrapper, its documentation presented challenges, demanding thorough exploration for optimal implementation. Another challenge was accessing gas prices API. Finding reliable APIs for fuel station data proved another obstacle, necessitating exploration and testing to ensure accurate and efficient querying. Additionally, certain frontend aspects posed difficulties, requiring persistent effort to navigate and successfully incorporate into the project.

## Accomplishments That We're Proud Of
Our achievements extend beyond the technical framework, showcasing our adaptability and problem-solving skills when navigating new APIs and troubleshooting challenges during the development phase. We take pride in delivering a beautiful and user-friendly UI that enhances the overall experience. Notably, our team engaged in extensive brainstorming sessions to hypothesize fuel prices, a process that exemplified our commitment to meticulous planning and strategic thinking. These accomplishments collectively reflect our dedication to delivering a comprehensive and innovative solution in the field of last-mile delivery optimization.

## What We Learned

Embarking on this technical project taught us invaluable lessons in collaborative development. We refined our ability to distribute work efficiently, recognizing the importance of workload division and individual expertise. Understanding the concept of abstraction became crucial, especially when working on interconnected aspects, requiring seamless integration. We honed our skills in maintaining progress between team members, ensuring a synchronized development timeline. Incorporating code review practices enhanced the quality of our codebase, fostering a collaborative environment for constructive feedback. Engaging in pair programming sessions further solidified our collaborative prowess, fostering a cohesive and productive team dynamic.

## What's next for SmartFuel
We plan to integrate adaptive weather considerations, dynamically adjusting routes based on real-time weather conditions—prioritizing safety, especially in cities like Seattle, by factoring in variables like elevation. Additionally, the focus extends to introducing dynamic routing updates, ensuring continuous cost savings through real-time adjustments to factors such as traffic and road closures. These initiatives collectively strive to establish new efficiency standards in last-mile delivery, delivering both cost savings and operational excellence.
