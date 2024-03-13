// we get data in the form of objects some times and it becomes hectic to use dot operator all the time so we destructure the objects key , example

const cousre={
    courseName:"javascript in hindi",
    id:204,
    cousreInstructor:"uddeshya",
}
 // it becomes hectic to use course.courseInstructor again and again so we use destructure of objects.  const {key:alternate _name of key}=object

 const {cousreInstructor:inst}=cousre;  
 const {courseName} = cousre; 
 const {id}=cousre;                   

 console.log(inst,courseName,id);