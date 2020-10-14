const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_TEXT_IN_CHAT = 'ADD-TEXT-IN-CHAT';

let store = { 
    _state: { 
        chatData: { 
         dialogData: [
             {
                 id: 1,
                 name: "Markov Kyrylo" 
             }, {
                 id: 2,
                 name: "Kizyb Katerina" 
             }, {
                 id: 3,
                 name: "John Poe" 
             }, {
                 id: 4,
                 name: "Mao Ze Dong" 
             }, {
                 id: 5,
                 name: "María José" 
             }, {
                 id: 6,
                 name: "John Q. Public" 
             },
           ],
         messagesData: [
             {
                 id: 1,
                 message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?" 
             }, {
                 id: 2,
                 message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, consequuntur?" 
             }, {
                 id: 3,
                 message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, a??" 
             }, {
                 id: 4,
                 message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, fugiat."
             }, {
                 id: 5,
                 message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?"
             }, {
                 id: 6,
                 message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, consequuntur?" 
             },
           ],
         },  
         postsData: [
     
             {
                 id: 1,
                 authorName : "Anakin Skywalker",
                 date:"26 февр.",
                 authorId : "@dart_vader",
                 title : "WTF? Who is Ray? Why she is Skywalker? Luke...? ",
             },{
                 id:2,
                 authorName : "Rey Palpatine",
                 date:"21 мая",
                 authorId : "@rey_palpatine",
                 title : "i'm Palpatine, not Skywalker", 
             },{
                 id:3,
                 authorName : "John Poe",
                 date:"20 марта",
                 authorId : "@John_Poe",
                 title : "Sed ut perspiciatis unde omnis iste natus error", 
             }, 
           ],
           textFromState :[
               {
                 newPostTitle : "this is text from state",
               },
           ]
           
     },
      _callSubscriber () { 
        console.log("State was changed");
    },
    get getState () { 
        return this._state;
    },subscribe (observer) { 
        this._callSubscriber = observer;
    },
     
    dispatch (action) {  //{type: 'ADD-POST'}
        if (action.type === ADD_POST) {
                let newPost = { 
                    id: 4,
                    authorName : "new Uerr",
                    date:"21 сентрября",
                    authorId : "@dart_viper",
                    title : this._state.textFromState[0].newPostTitle,
                    likeCount: 0,
                    }               
                        this._state.postsData.push(newPost);
                        this._state.textFromState[0].newPostTitle = "";
                        this._callSubscriber();
                 } else if (action.type === UPDATE_NEW_POST_TEXT) { 
                    this._state.textFromState[0].newPostTitle = action.newText;
                    this._callSubscriber();
                 } else if (action.type === 'ADD-TEXT-IN-CHAT') {                    
                    let newMessage = { 
                        id: 6,
                        message: action.chatMessage,
                    }
                    this._state.chatData.messagesData.push(newMessage);
                    this._callSubscriber();
                 } else { 
                    console.log('something went wrong!!!!!!!!!');
                 }            
    },
}

// setInterval (() => { 
//     console.log(store._state.textFromState[0].newPostTitle);
//   }, 1000);


export const addPostActionCreator = () =>  ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateNewChatMessageActionCreator  = (text) => ({type: ADD_TEXT_IN_CHAT, chatMessage: text});

export default store;

window.store  = store;







// let state = { 
//     chatData: { 
//      dialogData: [
//          {
//              id: 1,
//              name: "Markov Kyrylo" 
//          }, {
//              id: 2,
//              name: "Kizyb Katerina" 
//          }, {
//              id: 3,
//              name: "John Poe" 
//          }, {
//              id: 4,
//              name: "Mao Ze Dong" 
//          }, {
//              id: 5,
//              name: "María José" 
//          }, {
//              id: 6,
//              name: "John Q. Public" 
//          },
//        ],
//      messagesData: [
//          {
//              id: 1,
//              message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?" 
//          }, {
//              id: 2,
//              message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, consequuntur?" 
//          }, {
//              id: 3,
//              message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, a??" 
//          }, {
//              id: 4,
//              message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, fugiat."
//          }, {
//              id: 5,
//              message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?"
//          }, {
//              id: 6,
//              message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, consequuntur?" 
//          },
//        ],
//      },  
//      postsData: [
 
//          {
//              id: 1,
//              authorName : "Anakin Skywalker",
//              date:"26 февр.",
//              authorId : "@dart_vader",
//              title : "WTF? Who is Ray? Why she is Skywalker? Luke...? ",
//          },{
//              id:2,
//              authorName : "Rey Palpatine",
//              date:"21 мая",
//              authorId : "@rey_palpatine",
//              title : "i'm Palpatine, not Skywalker", 
//          },{
//              id:3,
//              authorName : "John Poe",
//              date:"20 марта",
//              authorId : "@John_Poe",
//              title : "Sed ut perspiciatis unde omnis iste natus error", 
//          }, 
//        ],
//        textFromState :[
//            {
//              newPostTitle : "this is text from state",
//            },
//        ]
       
//  };
 
 
 