import Vue from 'vue'
import Vuex from 'vuex'
import database, { auth } from "../firebase.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
        categories: { "Announcements": [ {},], 
        "Miscellaneous": [ {} ], 
        "Ownership": [ {} ], 
        "Questions & Feedback": [ {} ],
        "Vehicles": [ {} ] },
        categoryForums: [],
        cur_category: "",
    },
    getters: {
        getUser: state => state.user,
        getCategories: state => state.categories,
        getCategoryForums: state => state.categoryForums,
        getCategoryS: state => state.cur_category,
    },
    mutations: {
        SET_USER: state => {
            state.user = auth.currentUser;
        },
        SET_CURCATEGORY: (state, category) => {
            state.cur_category = category
        },
        SET_CATEGORIES: state => {
            database.collection('forum').get()
            .then((querySnapShot)=> {
              querySnapShot.forEach(doc => {
                let cat_id = doc.id
                state.categories[cat_id] = [];
      
              database.collection('forum').doc(cat_id)
                  .collection("threads").get()
                  .then((querySnapShot) => {
                    querySnapShot.forEach(doc => {
                        state.categories[cat_id].push(doc.data())
                  })
                })
              })
            })
        },
        SET_CATEGORYFORUMS: state => {
            database.collection('forum').doc(state.cur_category)
            .collection('threads').get()
            .then((querySnapShot)=> {
              querySnapShot.forEach(doc => {
                var thread_id = doc.id
                var main_msg = doc.data()
                main_msg['thread_id'] = thread_id
                main_msg['replies'] = []
    
                database.collection('forum').doc(state.cur_category)
                  .collection('threads').doc(thread_id)
                  .collection('replies').get()
                  .then((querySnapShot)=> {
                    querySnapShot.forEach(doc1 => {
                      main_msg['replies'].push(doc1.data())
    
                    })
                  })
                  // console.log(main_msg)
                state.categoryForums.push(main_msg);
              })
            })
        }
    },
    actions: {
        setUser: context => {
            context.commit("SET_USER");
        },
        setCategories: context => {
            context.commit("SET_CATEGORIES");
        },
        setCategoryForums: context => {
            context.commit("SET_CATEGORYFORUMS");
        },
        setCurCategory: (context, cat) => {
            context.commit("SET_CURCATEGORY", cat)
        }
    },
});