// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3

const numb = [1,2,3,4,5,6,7,8,9];
 for (const num of numb){if (num == 1){console.log('1st')}
else if (num == 2) 
{console.log('2nd')}
else if (num ==3){console.log('3rd')}
else {console.log(`${num}th`)}}