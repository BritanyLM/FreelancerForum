//A visitor enters the website and finds a list of available 
//freelancers.
//Make an array with objects, the array has freelancers by name, occupation and a price 
// list Alice, writer with a starting price of $30, and Bob, who is a teacher, 
//has a starting price of $50.
//have a message that takes the starting prices from the array and returns the avg

//A few seconds later, a new listing appears for a freelancer named 
// have the list update every 3 seconds using and interval to include new freelancers starting with Carol
//Carol, a programmer and has a starting price of $70. 

//New freelancers continue to appear every few seconds, 
//and the average starting price is updated accordingly.
//have the function stop when the array length reaches a certain number

const FreelancerData = [
    {name:"Alice", occupation:"Writer", price: 30},
    {name:"Bob", occupation:"Teacher", price: 50},
    {name:"Carol", occupation:"Programmer", price: 70},
    {name:"Seth", occupation:"Scientist", price: 85},
    {name:"Monique", occupation:"Tech Support", price: 65},
    {name:"Bianca", occupation:"Singer", price: 100},
];

let displayedFreelancers = [];

function displayFreelancers() {
    const FreelancerList = document.getElementById(`FreelancerList`);
    FreelancerList.innerHTML =``;
    displayedFreelancers = [];

    FreelancerData.forEach( freelancer => {
        displayFreelancer(freelancer);
    });
    
    
 }
function updateAveragePrice() {
    const AvgPriceElement = document.getElementById('AvgPrice');
    if (displayedFreelancers.length === 0) { 
        AvgPriceElement.textContent = `$0.00`;
        return;
    }

    const total = displayedFreelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = total / displayedFreelancers.length;
    AvgPriceElement.textContent = `$${average.toFixed(2)}`; // Format to 2 decimal places
}

    function displayFreelancersAtInterval() {
        const freelancersToDisplay = [
            FreelancerData[2], // Carol
            FreelancerData[3], // Seth
            FreelancerData[4], // Monique
            FreelancerData[5]  // Bianca
        ];
         
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < freelancersToDisplay.length) {
                displayFreelancer(freelancersToDisplay[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 5000);
    }     
    function displayFreelancer(freelancer) {
        const FreelancerList = document.getElementById('FreelancerList');
        const listItem = document.createElement('li');
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
        FreelancerList.appendChild(listItem);

        displayedFreelancers.push(freelancer);

        updateAveragePrice();
     }
 displayFreelancers();    
displayFreelancersAtInterval();