
import About from "../pages/about.astro";
import Claim from "../pages/claim.astro";
import BondInsurance from "../pages/bond-insurance.astro";
import ClaimsConsultancy from "../pages/claims-consultancy.astro";
import Contact from "../pages/contact.astro";
import EngineerInsurance from "../pages/engineer-insurance.astro";
import GeneralInsurance from "../pages/general-insurance.astro";
import Glossary from "../pages/glossary.astro";
import Index from "../pages/index.astro";
import LiabilityInsurance from "../pages/liability-insurance.astro";
import LifeInsurance from "../pages/life-insurance.astro";
import MarineInsurance from "../pages/marine-insurance.astro";
import MotorInsurance from "../pages/motor-insurance.astro";
import PortfolioManagement from "../pages/portfolio-management.astro";
import PropertyInsurance from "../pages/property-insurance.astro";
import Reinsurance from "../pages/reinsurance.astro";
import RiskAnalysis from "../pages/risk-analysis.astro";
import Services from "../pages/services.astro";
import Team from "../pages/team.astro";


const pages = [
    { About },{ ClaimsConsultancy }, { EngineerInsurance }, { GeneralInsurance }, { Glossary }, { Index },
    { LiabilityInsurance}, { LifeInsurance }, { MarineInsurance }, { MotorInsurance }, { PortfolioManagement }, { PropertyInsurance},
    { BondInsurance }, { Reinsurance }, { RiskAnalysis}, { Services }, { Team}, { Contact}, { Claim}, 
    ];

function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = pages.filter(page => page.content.toLowerCase().includes(query) || page.title.toLowerCase().includes(query));

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    if (results.length === 0) {
        resultsList.innerHTML = '<li>No results found</li>';
    } else {
        results.forEach(result => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${result.url}">${result.title}</a><p>${result.content}</p>`;
            resultsList.appendChild(li);
        });
    }
}


/*function toggleSearchBox() {
    var searchBox = document.getElementById('searchBox');
    if (searchBox.classList.contains('active')) {
        searchBox.classList.remove('active');
    } else {
        searchBox.classList.add('active');
    }
}*/