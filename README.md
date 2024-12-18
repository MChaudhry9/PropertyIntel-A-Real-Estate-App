<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->

<!-- 
 PROJECT LOGO
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">PropertyIntel: Your Go-To Real Estate Insights Tool</h3>

  <p align="center">
-->
<h1 align="center">PropertyIntel: Uncover Hidden Real Estate Insights</h1>





  <!--  
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>
-->

<div align="center">
<a href="https://real-estate-complaints.vercel.app/" target="_blank" rel="noopener noreferrer">View Live Demo</a>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
      <ul>
        <li><a href="#system-architecture">System Architecture</a></li>
      </ul>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-it-works">How it Works</a></li>
    <li><a href="#api-endpoints-and-query-parameters">API Endpoints and Query Parameters</a></li>
    <li><a href="#top-contributors">Top Contributors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
![App-Landing-Page-screenshot](https://github.com/MChaudhry9/Real-Estate-App/blob/main/src/assets/realestateLandingPage.png)

PropertyIntel is an innovative web app platform that empowers users to explore and analyze building violations across New York City. It integrates a RESTful API built using real-time data from the NYC Department of Buildings (DOB), sourced from the [NYC Open Data](https://opendata.cityofnewyork.us/) platform. The app features an interactive, map-based interface powered by the Google Maps API. This web app sets us apart from other real estate platforms because we help uncover property issues such as code violations and unresolved maintenance problems that other mainstream real estate platforms like Zillow and StreetEasy do not provide.  

This tool is designed to provide actionable insights for real estate professionals, property buyers, investors, homebuyers, and the general public by:  

- Highlighting property issues that may affect market value  
- Identifying unresolved maintenance concerns  
- Exposing legal or code violations  
- Offering leverage for negotiations  
- Supporting informed investment decisions  
- Revealing neighborhood trends and infrastructure challenges 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- **Real-time Data**: The app leverages up-to-date data from the [NYC Open Data platform](https://opendata.cityofnewyork.us/) to provide accurate information on building violations across New York City.
- **Map-based Interface**: Users can easily visualize and interact with building violations through an interactive, map-based interface.
- **Search Filters**: The app supports multiple search filters (address, zip code, and BIN number) to help users find specific violations or complaints.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## System Architecture
![Flowchart](https://github.com/MChaudhry9/Real-Estate-App/blob/main/src/assets/Flowchart.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies Used

* [![Python](https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
* [![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
* [![React](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
* [![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
* [![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [![Google Maps API](https://img.shields.io/badge/Google_Maps_API-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)](https://developers.google.com/maps)






<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow the steps below to set up and run the project locally.

### Installation

1. Get a free API Key at <a href="https://mapsplatform.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=google_maps_brand_us_2&gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LITbKNA3IdbLeO6gESqh880KDQw6_kmadOmbmLMxyABL8eLl4ptaDxoC8eoQAvD_BwE&gclsrc=aw.ds">Google Maps API 
2. Clone the repo
   ```sh
   git clone https://github.com/MChaudhry9/PropertyIntel-A-Real-Estate-App.git

3. Install NPM packages in your terminal
   ```sh
   npm install
   ```
4. Enter your Google Maps API key in `client/src/components/Map/Map.jsx`:

   ```jsx
   bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}

  
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## How it Works


1. **User Inputs Their Query**  
   Users enters an address/zipcode/BIN number into the search bar to find building violations.

2. **Address Geolocation**  
   The **Google Maps API** identifies and locates the entered address, placing a marker on the interactive map to highlight the location.

3. **API Query**  
   The application sends the address details to the custom API, which processes the request and retrieves relevant building violation data.

4. **Data Fetching**  
   The custom API queries the **NYC Open Data** platform for violation records associated with the provided address, ensuring accurate and up-to-date information.

5. **Displaying Violations**  
   The fetched violation data is returned to the front end, where it is displayed in a user-friendly format. Violations are represented as map markers, and detailed information is provided for each violation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## API Endpoints and Query Parameters

- **GET `/api/complaints`**: Retrieve all violations.
- **GET `/api/complaints?address={}`**: Retrieve a violation by address.
- **GET `/api/complaints?zip_code={}`**: Retrieve a violation by zipcode.
- **GET `/api/complaints?bin_number={}`**: Retrieve a violation by the unique identifier: Building Identification Number (BIN Number).
- **GET `/api/complaints?address={}&zip_code={}`**: Retrieve a violation by both address and zipcode.
- **GET `/api/complaints?address={}&bin_number={}`**: Retrieve a violation by address and BIN number.
- **GET `/api/complaints?zip_code={}&bin_number={}`**: Retrieve a violation by both zip code and BIN number.
- **GET `/api/complaints?address={}&zip_code={}&bin_number={}`**: Retrieve a violation by address, zip code, and BIN number.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Top contributors:

- Mamuna Chaudhry
- Chao Hong
- Jay Trivedi

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
<!-- ### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->
