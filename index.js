
document.write(" <h1> Results</h1>")
var counter = 10;
document.write("the value of  a is  " + counter ) 
var counter = 10;
var newValue =  ++counter
document.write(   " <br/>the value of  ++a is : " + counter)
document.write(" <br/ >Now the value of counter is : " + newValue)

 var counter = newValue
 var newValue1 = counter++
 document.write(   " <br> the value of  a++ is : " + newValue)
 document.write(" <br/>Now the value of counter is : " + counter)


 var counter1 = newValue
 var newValue1 = --counter
 document.write(   " <br> the value of  --a is : " + newValue1)
 document.write(" <br/>Now the value of counter is : " + counter1)

 var counter1 = newValue
 var newValue1 = --counter
 document.write(   " <br> the value of  --a is : " + newValue1)
 document.write(" <br/>Now the value of counter is : " + counter1)
 var counter2 = newValue
 var newValue2 = counter--
 document.write(   " <br> the value of  a-- is : " + newValue2)
 document.write(" <br/>Now the value of counter is : " + counter2)

 var a = 2 
 var b = 1
//  const sum = --a;  
//  document.write("a is" + sum)
//  const sum1 = --a - --b;
//  document.write(" <br/> a is" + sum1)
// const sum2 = --a - --b + ++b;
// document.write(" <br/> b is" + sum2)
const sum3 = --a - --b + ++b + b--;
document.write("  <br> result is " + sum3)
var num = prompt("Enter Number", "0") //prompt user to enter the number
var num = parseInt(num); //parse the num to number
var i = 0;
document.write('<table border="1" cellspacing="0">');
for (i = 1; i < 10; i++) {
  document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
}
//  document.write("  <br/>   Subject Total Marks Obtained Marks Percentage ")
//  document.write(" <br/>  Math "  + " 100  " +  "  "+ " 54  " +"54"+"%")
//  document.write(" <br/> Urdu "  + " 100  " +  "  "+ " 54 "+"48"+ "%")



// // var english = 100
// // var englishobtainedmarks= 54
// // document.write(
// //   "  <br/>   Subject Total Marks Obtained Marks Percentage "+
// //  "</n>" + " English "  + "  100   " +  " 54 "+ "54" +"%"+
// //  "<br/>" + "Math "  + " 100  " +  "  "+ " 54  " +"54"+"%"
// //  +"<br/>"+ "Urdu "  + " 100  " +  "  "+ " 54 "+"48"+ "%"
// }

var sub1 = prompt(' <br> Enter the 1st subject name: ');
        var sub2 = prompt('Enter the 2nd subject name: ');
        var sub3 = prompt('Enter the 3rf subject name: ');
        var totalMarkforSubject1 = 100;
        var totalMarkforSubject2 = 100;
        var totalMarkforSubject3 = 100;
        var obtMark1 = parseInt(prompt('Enter the obtain marks you got in 1st subject: '));
        var obtMark2 = parseInt(prompt('Enter the obtain marks you got in 2st subject: '));
        var obtMark3 = parseInt(prompt('Enter the obtain marks you got in 3st subject: '));
        var totalMarks = totalMarkforSubject1 + totalMarkforSubject2 +totalMarkforSubject3;
        var obtTotalMarks = obtMark1 + obtMark2 + obtMark3;
        var totalPercentage = obtTotalMarks / totalMarks * 100;
        var percentageForSub1 = obtMark1 / totalMarkforSubject1 * 100;
        var percentageForSub2 = obtMark2 / totalMarkforSubject2 * 100;
        var percentageForSub3 = obtMark3 / totalMarkforSubject3 * 100;
        document.write('Subject   Total Marks   Obtained Marks   Percentage');
        document.write('<br>');
        document.write(sub1+  '        ' +totalMarkforSubject1+  '       '  +obtMark1+ '       '   +percentageForSub1+'%');
        document.write('<br>');
        document.write(sub2+  '        ' +totalMarkforSubject2+  '       '  +obtMark2+ '       '   +percentageForSub2+'%');
        document.write('<br>');
        document.write(sub3+  '        ' +totalMarkforSubject3+  '       '  +obtMark3+ '       '   +percentageForSub3+'%');
        document.write('<br>');
        document.write( '        ' +totalMarks+  '       '  +obtTotalMarks+ '       '   +totalPercentage+'%');
        document.write('<br>')