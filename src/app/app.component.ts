import { Component, OnInit } from '@angular/core';


import users from './files/users.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'userAssignment';
// obj ={
//   parent:'1',
//   childs:[
//     {parent:'2',childs:[{parent:5,childs:[]}]}
//     ,{parent:'8',childs:[]}
//   ]
// }
 
  usersListData:{name:string, code:string}[] = users;
  users=[]
  levels=[];
  //  obj=[
  //   {
  //     "parent":"1",
  //     childs:[
  //     {"parent":"2",childs:[
  //         {"parent":"5",childs:[
  //           {parent:'9',childs:[]}
  //         ]},
  //         {"parent":"6",childs:[]}
  //     ]},
  //     {"parent":"3",childs:[

  //     ]},
  //     {"parent":"4",childs:[

  //     ]},
  //      {"parent":"4",childs:[

  //     ]}
  //    ]
  // }
  // ]
ngOnInit(): void {
   this.initUsers(this.usersListData)
     
}

  initUsers(usersData){

    usersData.map((item)=>{
     console.log("🚀 ~ usersData.map ~ item", item)
     this.createUSersWithLevels(item)
        })

    this.levels =[...new Set(this.levels)]   
    console.log(this.users);
        
  }
 
  createUSersWithLevels(item){
    const userListCode = item.code.split('.')
      this.users.push({
        code:userListCode[userListCode.length-1],
        level:userListCode.length,
        name:item.name,
        parent:userListCode[userListCode.length-2]
        })
     this.levels.push(userListCode.length)
    
  }

 
}
