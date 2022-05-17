

const createMyElement = (parent,element,classes,text,attribute=[]) =>{
    const MyEle = document.createElement(element)
    if(classes) MyEle.classList = classes
    parent.appendChild(MyEle)
    MyEle.innerText = text
    attribute.forEach(attr =>{
        attr.attrName = attr.attrVal
    })
    return MyEle
}
const mainURL = "https://jsonplaceholder.typicode.com/"
const Button = document.querySelector("#Buttons")
const Data = document.querySelector("#data")
const table = document.getElementById("data")
const api = [
    {urlKeyWord:"posts",showKeyWord:"Post Data",headers:['body',"id",'title','userId']},
    {urlKeyWord:"users",showKeyWord:"Users Data",headers:['id',"name",'username','email',"phone","address[0]"]},
    {urlKeyWord:"photos",showKeyWord:"Photo Data",headers:['albumId',"id",'title','url'] },
    {urlKeyWord:"todos",showKeyWord:"Todos Data",headers:['userId',"id",'title','completed']},
]
api.forEach(api =>{
    const btn = createMyElement(Button,'button','btn btn-danger mx-3',api.showKeyWord)
    btn.addEventListener("click",async () =>{
            const result = await ( await fetch(`${mainURL}${api.urlKeyWord}`)).json()
            console.log(result);
            const thead = createMyElement(table,"thead",null,null)
            const tr =createMyElement(thead,"tr",null,null)
            api.headers.forEach(head =>{
                const th = createMyElement(tr,"th",null,head)
            })
            const tbody = createMyElement(table,"tbody",null,null)
            
            result.forEach(res =>{
                const tr = createMyElement(tbody,"tr",null,null)
                api.headers.forEach(head =>{
                    res[head]
                  const td = createMyElement(tr,"td",null,res[head])
                    console.log(res[head]);
                })
            })
    })

})