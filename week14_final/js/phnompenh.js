const stats = [
    {
        name: 'Population',
        value: '2,143,591'
    },
    {
        name: 'Growth Rate',
        value: '3.18 %'
    },
    {
        name: 'Ethnic: Khmer',
        value: '97.6 %'
    },
    {
        name: 'Ethnic: other',
        value: '0.9 %'
    },
    {
        name: 'median age',
        value: '25.6 years'
    },
    {
        name: 'Percent (over 65)',
        value: '14.8 %'
    },
    {
        name: 'women',
        value: '792,926 '
    },
    {
        name: 'Men',
        value: ' 708,799 '
    },
    {
        name: 'Home Ownership',
        value: '69 %'
    },
    {
        name: 'Married',
        value: '61.9 %'
    },
    {
        name: 'Household Size (avg.)',
        value: '3.95'
    },
    {
        name: 'College Degree (over 25)',
        value: '47 %'
    },
    {
        name: 'Avg. Income (college)',
        value: '$ 59,696'
    },
    {
        name: 'Avg. Income (HS or less)',
        value: '$ 34,930'
    },
    {
        name: 'Poverty​ Rate​​​',
        value: '105,000'
    }
];

// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    
    // STAT DATA //
    // get element
    let statsData = document.querySelector('.stat-data-output');

    // loop through data and output content
    for (let i = 0; i < stats.length; i++) {
    // create content
        let dataContent = 
            `<div class="content">
                <div class="name">${stats[i].name}:</div>
                <div class="divider"></div>
                <div class="value">${stats[i].value}</div>
            </div>`;

        // output the stat content
        statsData.insertAdjacentHTML('beforeend', dataContent);
    }

    // SLIDE SHOW IMG LOAD
    // get elements
});