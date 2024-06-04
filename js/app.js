//let aaa = [1, 35, 3, 26, 185];

const mymax = (aaa) => {
	let temp1 = aaa[0]

for(index1 in aaa)
{
	if(aaa[index1]>temp1){
			
		temp1 = aaa[index1]
	}

}
//return temp1
document.getElementById('p1').innerHTML="The maximum number is: " + temp1
}

