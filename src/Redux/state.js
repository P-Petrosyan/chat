const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you?', likescount: 0 },
                { id: 2, message: "It's my first post.", likescount: 23 },
                { id: 3, message: "It's my first day.", likescount: 3 },
                { id: 4, message: "It's my fist time.", likescount: 33 }
            ],
            newPostText: 'it-Kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimich' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Vika' },
                { id: 6, name: 'Valeera' }
            ],

            Messages: [
                { id: 1, message: 'Hi how are you?' },
                { id: 2, message: 'Hayes ape jan?' },
                { id: 3, message: 'Yalla Habibi' },
                { id: 4, message: 'Yalla Habibi' },
                { id: 5, message: 'Yalla Habibi' },
            ],
            newMessageBody: ""


        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likescount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.Messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})

window.store = store;
export default store;