//UC5:-- Calculating Wages till Number of Working Days or Total Working Hours per month is Reached


const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2; 
const PART_TIME_HOURS = 4; 
const FULL_TIME_HOURS = 8; 
const WAGE_PER_HOUR = 20; 
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours (empCheck)
 {
         switch(empCheck)
		{
    		case IS_PART_TIME:
    				return PART_TIME_HOURS;
    		case IS_FULL_TIME:
     				return FULL_TIME_HOURS;
    		default:
     				return 0;
		}
 }
let empHours = 0;
let totalWorkingDays = 0;
let totalWorkingHours = 0;
let totalEmpHrs=0;

while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck=Math.floor(Math.random()*10)%3;
	totalEmpHrs+=getWorkingHours(empCheck);
}

let empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5-Total Days:"+totalWorkingDays+"Total Hrs:"+totalEmpHrs+"Emp Wage:"+empWage);