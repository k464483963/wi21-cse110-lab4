Q1:print out the value 3

Q2:print out the value 150

Q3:print out the value 150

Q4:The return value is (3,150,150). The i print out 3 because the i is using the var and the var can access the value outside the brackets, i is keep counting three times(prices length is 3). The discountedPrice is var can access the value outside the brackets and the value is 150 because it only show the last calculate value like 300 * (1-0.5) = 150 = discountedPrice. The finalPrice is var can access the value outside the brackets and the value is 150 because it only show the last calculate value like (150 * 100) /100 = 150 = finalPrice.

Q5:The referenceError: i is not defined. The reason is let is only can access the value inside the brackets. console.log(i) is out side brackets so the i is not defined.

Q6:The referenceError: discountedPrice is not defined. The reason is let is only can access the value inside the brackets. console.log(discountedPrice) is out side brackets so the discountedPrice is not defined.

Q7:print out the value 150. 

Q8:The program have complie error because the referenceError which is i and discountedPrice are not defined.

Q9:The referenceError: i is not defined. The reason is let is only can access the value inside the brackets. console.log(i) is out side brackets so the i is not defined.

Q10:The referenceError: discountedPrice is not defined. The reason is const is only can access the value inside the brackets. console.log(discountedPrice) is outside brackets so the discountedPrice is not defined.

Q11:TypeError: Assignment to constant variable. finalPrice is assign to 0 and this is constant value and the value can not change. However, "finalPrice = Math.round(discountedPrice * 100)/100;" tried to change the finalPrice value. Therefore, error message show.

Q12:Compiler error. TypeError: Assignment to constant variable. finalPrice is assign to 0 and this is constant value and the value can not change. However, "finalPrice = Math.round(discountedPrice * 100)/100;" tried to change the finalPrice value. Therefore, error message show.

Q13:A: student.name; B:student['Grad Year']; C:student.greeting(); D:student['Favorite Teacher'].name; E:student.courseLoad[0];

Q14:A:Output:32; This is a string type. when 3 is string plus the number 2, it automatic connect string 3 and 2;

B:Output:1; If the string minues the number, it would automatic convert string to number, so 3-2 = 1; 

C:Output:3; number plus null and null become the number.

D:Output:3; null  string concatenate null which become string.

E:Output:4; true convert to 1 as number

F:Output:0; false(0) and null(0) are both convert to number type. 

G:Output:3undefined; convert to string and concatenate together.

H:Output:NaN; 3 as number minus undefined which convert to number type NaN.

Q15:
A:Output:true; string 2 convert to number 2, 2>1.

B:Output:false; string convert to number, 2<12.

C:Output:true; string convert to number. so 2=2;

D:Output:false; strict equality actually compare are the value is equal without any type convert. so "2" is not equal number 2.

E:Output:false; true is equal 1 not 2.

F:Output:true; Boolean(2) is return true so equal to true.

Q16: "==="strict equality actually compare are the value is equal without any type convert. But "==" conpare the value after convert type.

Q17:Output:How are you?; true convert to number 1, 2 != 1, so 'Hello' not print. "else if(2) is always true. so the How are you? print out.

Q19:The output result is: [ 6, 8, 10 ]; The reason is we have call back function as the paracmeter in the modifyArray function. Every value in the array add 2 and then back to the modifyArray function and every value multiple 2 then return the new array.

Q21:Output:1 4 3 2; 1 and 4 is not in the setTimeout function so no delay. 2 have more delay than 3 so 3 print out first.
