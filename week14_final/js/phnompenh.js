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
        value: '4.59 %'
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
        name: 'Personal Income Tax Rate',
        value: '20 %'
    },
    {
        name: 'Disposable Personal Income',
        value: 'KHR 2262'
    },
    {
        name: 'number of slum-inhabitants​​​',
        value: '105,771'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    let statsData = document.querySelector('.stat-data-output');
    for (let i = 0; i < stats.length; i++) {
    let dataContent = 
            `<div class="content">
                <div class="name">${stats[i].name}:</div>
                <div class="divider"></div>
                <div class="value">${stats[i].value}</div>
            </div>`;
        statsData.insertAdjacentHTML('beforeend', dataContent);
    }

});