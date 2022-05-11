
// // add  data

tableHeads = [
    {el:"id",viewEl:"ID",hasDeafult:true,default: Date.now()},
    {el:"status",viewEl:"Status",hasDeafult:true,default:false},
    {el:"title",viewEl:"Titel",hasDeafult:false},
    {el:"content",viewEl:"Content",hasDeafult:false},
    {el:"age",viewEl:"Age",hasDeafult:false},
    {el:"dueDate",viewEl:"DeadLine",hasDeafult:false},
    {el:null,viewEl:"Actions",hasDeafult:false}

    
]
const readFromStorage = () =>{
    let data;
    try{
        data = JSON.parse(localStorage.getItem('tasks')) || []
        if(!Array.isArray(data)) throw new Error("no data")
    }
    catch(e){
        data = []
    }
    return data
}

const writeToStorage = (data) =>{
    localStorage.setItem("tasks",JSON.stringify(data))
    
} 
    
const AddForm = document.querySelector("#addForm") 
const Form = document.querySelector("#editeForm")

console.log(Form);
if(AddForm){
AddForm.addEventListener("submit",function(e){
    e.preventDefault()
    TasksInptVal = {
        // title:this.elements.title.value,
        // age:this.elements.age.value,
        // content:this.elements.content.value,
        // dueDate:this.elements.dueDate.value,
        // status:false,
        // id: Date.now()
        
    }
    tableHeads.forEach(head=>{
        if(head.hasDeafult && head.el) TasksInptVal[head.el] = head.default
        else if(head.el) TasksInptVal[head.el] = addForm.elements[head.el].value
    })
   const allTasks = readFromStorage()
   allTasks.push(TasksInptVal)
   writeToStorage(allTasks)
   this.reset()
   window.location.href = "index.html"
   
   
   
})
}

 
// display data
const createMyElements = (parent , element , classes,txt,attributes=[]) =>{
    MyEle = document.createElement(element)
    if(classes) MyEle.classList = classes
    parent.appendChild(MyEle)
    MyEle.innerText = txt
    attributes.forEach(attr => MyEle[attr.attrName] = attr.attrVal)
    return MyEle
}
const dataWrap = document.querySelector("#dataWrap")
const ShowData = () =>{
    dataWrap.innerHTML = ''
    const data = readFromStorage()
   const thead = createMyElements(dataWrap,"thead",null,null)
   const tr = createMyElements(thead,"tr",null,null)
   tableHeads.forEach(h=> createMyElements(tr,"th",null,h.viewEl))
   const tBody = createMyElements(dataWrap,'tBody',null,null)
   data.forEach( (task,index) => {
        const tr = createMyElements(tBody,'tr',null,null)
        tableHeads.forEach(h=>{
           if(h.el) createMyElements(tr,'td',null,task[h.el])
        })

        const td = createMyElements(tr , 'td',null,null)
        const btnDelete = createMyElements(td,'button',"btn btn-danger mx-2", "Delete");
        const btnEdite = createMyElements(td,'button',"btn btn-warning mx-2", "Edite");
        const btnChange = createMyElements(td,'button',"btn btn-success mx-2", "Edite Status");
        const btnShow = createMyElements(td,'button',"btn btn-primary mx-2", "Show");

        btnDelete.addEventListener("click",function(){
                data.splice(index,1)
                writeToStorage(data)
                ShowData()
        })
        btnChange.addEventListener("click",function(){
                data[index].status = !data[index].status
                writeToStorage(data)
                ShowData()
        })
        btnShow.addEventListener("click",function(){
              localStorage.setItem("id",index)
              window,location.href = "single.html"
        })
        btnEdite.addEventListener("click",function(e){
            localStorage.setItem("edite",index)     
            window.location.href = "edite.html"
             

          
 
 
            
                
          
        
            
             
        })
   })
}
if(dataWrap) ShowData()


// delete page
const single_ele = document.querySelector("#single-ele")
if(single_ele){
    const idIitem = localStorage.getItem('id')
    if(!idIitem) window.location.href = "index.html"
    const data = readFromStorage()
    const myElement = data[idIitem]
    if(!myElement) single_ele.innerHTML = `<div class="alert alert-danger"> Error in Loading</div>`
    else{
        single_ele.innerHTML=`
        
        <div class="alert alert-primary">
        <h4>${myElement.id}</h4>
        <h6>${myElement.title}</h6>
        <h6>${myElement.content}</h6>
    </div
        `
    }

}
    




// edite page
if(Form) {
const Edite_Task = document.querySelector("#EditeBtn")
 const idIitem = localStorage.getItem('edite')
 const data = readFromStorage()
  const myElement2 = []
  const myElement = data[idIitem]
tableHeads.forEach(head=>{
   if(head.hasDeafult && head.el) myElement[head.el] = head.default
   else if(head.el) Form.elements[head.el].value = myElement[head.el] 
})  


Form.addEventListener("submit",function(e){
    e.preventDefault()
    tableHeads.forEach(head=>{

       if(head.hasDeafult && head.el) myElement[head.el] = head.default
       else if(head.el)  myElement[head.el] = Form.elements[head.el].value 
       
    }) 
    myElement2.push(myElement) 
    writeToStorage(myElement2)
    window.location.href = "index.html"
})

    
        
    }





























    

// tableHaeds = [
//     {el:"id",viewEle:"ID",hasDefulte:true , default: Date.now()},
//     {el:"status",viewEle:"Is Finished",hasDefulte:true , default:false},
//     {el:"title",viewEle:"Title",hasDefulte:false},
//     {el:"content",viewEle:"Content",hasDefulte:false},
//     {el:"dueDate",viewEle:"DiedLine",hasDefulte:false},
//     {el:"age",viewEle:"Age",hasDefulte:false},
//     {el:null,viewEle:"Actions",hasDefulte:false},
// ]


// const readFromStorage = () => {
//     let data ;
//     try{
//         data = JSON.parse(localStorage.getItem("tasks")) || []
//         if(!Array.isArray(data))throw new Error ("no data")
//     }
//     catch{
//             data = []
//     }
//     return data
// }
// const writeToStorage = (data) => localStorage.setItem("tasks",JSON.stringify(data))
// const addForm = document.querySelector("#addForm")
// if(addForm){
// addForm.addEventListener("submit",function(e){
//     e.preventDefault()
//     tasks = {}
//     tableHaeds.forEach(head => {
//         if(head.hasDefulte && head.el ) tasks[head.el] = head.default
//         else if (head.el) tasks[head.el] = addForm.elements[head.el].value
//     });
//     const allTasks = readFromStorage()
//     allTasks.push(tasks)
//     writeToStorage(allTasks)
//     window.location.href = "index.html"
// })
// }


// const dataWrap = document.querySelector("#dataWrap")
// const createMyElements = (parent,element,classes,txt,attribtute = [])=>{
//     let myEly = document.createElement(element)
//     if(classes) myEly.classList = classes
//     parent.appendChild(myEly)
//     myEly.innerText = txt 
//     attribtute.forEach(attr => myEly[attr.attrName] = attr.attrVal)
//     return myEly
// }


// const showData = () => {
//     dataWrap.innerHTML=''
//     const data = readFromStorage()
//     const thead = createMyElements(dataWrap,"thead",null,null)
//     const tr = createMyElements(thead,"tr",null,null)
//     tableHaeds.forEach(head=>{
//         createMyElements(tr,"th",null,head.viewEle)
//     })
//     const tbody = createMyElements(dataWrap,"tBody",null,null)
//     data.forEach((head,i)=>{
//         const tr = createMyElements(tbody,"tr",null,null)
//         tableHaeds.forEach(h=>{
//             if(h.el) createMyElements(tr,'td',null,head[h.el])
           
//         })
//         const td = createMyElements(tr,'td',null,null)
//         const btnDelete = createMyElements(td,'button',"btn btn-danger m-2",'Delete');
//         const btnEdite = createMyElements(td,'button',"btn btn-warning m-2",'Edite');
//         const btnChange = createMyElements(td,'button',"btn btn-primary m-2",'Change Status');
//         const btnShow = createMyElements(td,'button',"btn btn-success m-2",'Show');

//         btnDelete.addEventListener("click",function(){
//                 data.splice(i,1)
//                 writeToStorage(data)
//                 showData()
//         })
//         btnChange.addEventListener("click",function(){
//               data[i].status = !data[i].status
//               writeToStorage(data)
//                 showData()
//         })
//         btnShow.addEventListener("click",function(){
//             localStorage.setItem('id',i)  
//            window.location.href = "single.html"
//       })
//     })
    
// }
// if(dataWrap) showData()


// const single_ele = document.getElementById("single-ele")
// if(single_ele){
//     let Iditem = localStorage.getItem("id")
// }


// const sum = (x,y)=>{
//     return{
//         function(){
//            r= x+y
//            return r
//         }
    
//     }
// }

